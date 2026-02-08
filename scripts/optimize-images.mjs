import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE_IMAGES = [
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287487818_f29a9c0a.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503428_5f515e73.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503617_ce61aba2.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287505032_a263e9ad.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287505751_03bf4158.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287506336_e4309f12.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287509277_ccf1658b.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287524015_3ed19abb.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287526096_911c3873.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287526296_503a9063.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287529903_7b6cea9a.png',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287549968_1b361fc2.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287550924_b97c585c.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287551494_08677bf2.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287556330_3745f45d.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287570278_b23d1ebd.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287572721_85927ff1.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287572746_e5472e29.jpg',
  'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287625209_b24d1e96.png',
];

const OUT_DIR = path.join(process.cwd(), 'public', 'images');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 75;
const AVIF_QUALITY = 50;

function getFilename(url) {
  return new URL(url).pathname.split('/').pop();
}

function replaceExt(filename, ext) {
  return filename.replace(/\.(png|jpe?g)$/i, `.${ext}`);
}

async function download(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function optimizeOne(url) {
  const filename = getFilename(url);
  if (!filename) throw new Error(`Could not derive filename from ${url}`);

  const ext = path.extname(filename).toLowerCase();
  const base = sharp(await download(url)).rotate();
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
    await fs.writeFile(fallbackPath, await download(url));
  }

  await pipeline.clone().webp({ quality: WEBP_QUALITY }).toFile(webpPath);
  await pipeline.clone().avif({ quality: AVIF_QUALITY, effort: 4 }).toFile(avifPath);

  return { filename, fallbackPath, webpPath, avifPath };
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  console.log(`Optimizing ${SOURCE_IMAGES.length} images -> ${OUT_DIR}`);

  for (const url of SOURCE_IMAGES) {
    const filename = getFilename(url);
    process.stdout.write(`- ${filename} ... `);
    await optimizeOne(url);
    process.stdout.write('done\n');
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

