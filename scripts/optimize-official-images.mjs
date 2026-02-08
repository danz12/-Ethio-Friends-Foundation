import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const IN_DIR = path.join(process.cwd(), 'file');
const OUT_DIR = path.join(process.cwd(), 'public', 'images', 'official');

const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 78;
const AVIF_QUALITY = 52;

function replaceExt(filename, ext) {
  return filename.replace(/\.(png|jpe?g)$/i, `.${ext}`);
}

function sanitizeFilename(filename) {
  return filename.trim().replace(/\s+/g, '-');
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function shouldOptimize(outputFilename) {
  const fallbackPath = path.join(OUT_DIR, outputFilename);
  const webpPath = path.join(OUT_DIR, replaceExt(outputFilename, 'webp'));
  const avifPath = path.join(OUT_DIR, replaceExt(outputFilename, 'avif'));

  return !(await fileExists(fallbackPath)) || !(await fileExists(webpPath)) || !(await fileExists(avifPath));
}

async function optimizeOne(inputPath, inputFilename) {
  const filename = sanitizeFilename(inputFilename);
  const ext = path.extname(inputFilename).toLowerCase();
  const base = sharp(inputPath).rotate();
  const metadata = await base.metadata();
  const pipeline =
    metadata.width && metadata.width > MAX_WIDTH
      ? base.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      : base;

  const fallbackPath = path.join(OUT_DIR, filename);
  const webpPath = path.join(OUT_DIR, replaceExt(filename, 'webp'));
  const avifPath = path.join(OUT_DIR, replaceExt(filename, 'avif'));

  if (ext === '.jpg' || ext === '.jpeg') {
    await pipeline.clone().jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(fallbackPath);
  } else if (ext === '.png') {
    await pipeline.clone().png({ compressionLevel: 9 }).toFile(fallbackPath);
  } else {
    await fs.copyFile(inputPath, fallbackPath);
  }

  await pipeline.clone().webp({ quality: WEBP_QUALITY }).toFile(webpPath);
  await pipeline.clone().avif({ quality: AVIF_QUALITY, effort: 4 }).toFile(avifPath);

  return { fallbackPath, webpPath, avifPath };
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  let entries = [];
  try {
    entries = await fs.readdir(IN_DIR, { withFileTypes: true });
  } catch {
    console.error(`No ${IN_DIR} directory found. Nothing to do.`);
    return;
  }

  const images = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => /\.(png|jpe?g)$/i.test(name));

  if (images.length === 0) {
    console.log('No images found to optimize.');
    return;
  }

  console.log(`Optimizing ${images.length} official images -> ${OUT_DIR}`);

  for (const filename of images) {
    const outputFilename = sanitizeFilename(filename);
    const needsOptimize = await shouldOptimize(outputFilename);

    process.stdout.write(`- ${filename}`);
    if (outputFilename !== filename) process.stdout.write(` -> ${outputFilename}`);
    process.stdout.write(needsOptimize ? ' ... ' : ' ... skipped\n');

    if (!needsOptimize) continue;

    await optimizeOne(path.join(IN_DIR, filename), filename);
    process.stdout.write('done\n');
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
