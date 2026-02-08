const CLOUDFRONT_ORIGIN = 'https://d64gsuwffb70l.cloudfront.net';

function getLocalImagesPath(src: string): string | null {
  const trimmed = src.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith('/images/')) return trimmed;
  if (trimmed.startsWith('images/')) return `/${trimmed}`;

  return null;
}

function getCloudfrontFilename(src: string): string | null {
  try {
    const url = new URL(src);
    if (url.origin !== CLOUDFRONT_ORIGIN) return null;
    const filename = url.pathname.split('/').pop();
    if (!filename) return null;
    return filename;
  } catch {
    return null;
  }
}

export function getPublicImageVariantPath(
  src: string,
  variant: 'fallback' | 'webp' | 'avif' = 'fallback'
): string | null {
  const local = getLocalImagesPath(src);
  if (local) {
    if (variant === 'fallback') return local;
    return local.replace(/\.(png|jpe?g)$/i, `.${variant}`);
  }

  const filename = getCloudfrontFilename(src);
  if (!filename) return null;

  const fallbackPath = `/images/${filename}`;
  if (variant === 'fallback') return fallbackPath;

  return fallbackPath.replace(/\.(png|jpe?g)$/i, `.${variant}`);
}

export function getPublicImageVariantUrl(
  src: string,
  variant: 'fallback' | 'webp' | 'avif' = 'fallback'
): string | null {
  const pathname = getPublicImageVariantPath(src, variant);
  if (!pathname) return null;

  const base = import.meta.env.BASE_URL;
  return `${base}${pathname.replace(/^\//, '')}`;
}
