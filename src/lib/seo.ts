export function getCanonicalUrl(pathname: string): string {
  if (typeof window === 'undefined') return pathname;

  const baseUrl = new URL(import.meta.env.BASE_URL, window.location.origin);
  const basePath = import.meta.env.BASE_URL;
  const strippedPath =
    basePath !== '/' && pathname.startsWith(basePath)
      ? `/${pathname.slice(basePath.length)}`
      : pathname;
  const normalizedPath = strippedPath === '/' ? '' : strippedPath.replace(/^\//, '');

  return new URL(normalizedPath, baseUrl).toString();
}

export function upsertMetaByName(name: string, content: string) {
  const selector = `meta[name="${name}"]`;
  let meta = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

export function upsertMetaByProperty(property: string, content: string) {
  const selector = `meta[property="${property}"]`;
  let meta = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

export function removeMetaByName(name: string) {
  const selector = `meta[name="${name}"]`;
  document.head.querySelector(selector)?.remove();
}

export function upsertCanonicalLink(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
}
