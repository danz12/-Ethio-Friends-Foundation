import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '@/lib/site';
import { getCanonicalUrl, removeMetaByName, upsertCanonicalLink, upsertMetaByName, upsertMetaByProperty } from '@/lib/seo';
import { getPublicImageVariantPath } from '@/lib/images';

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
};

function resolveTitle(title: string) {
  if (!title) return SITE.name;
  if (title === SITE.name) return title;
  return `${title} | ${SITE.shortName}`;
}

function toAbsoluteUrl(url: string) {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  return getCanonicalUrl(url);
}

const Seo = ({ title, description, image, imageAlt, ogType = 'website', noIndex }: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    const googleVerification = (import.meta.env.VITE_GOOGLE_SITE_VERIFICATION ?? '').trim();
    const resolvedTitle = resolveTitle(title);
    const canonicalUrl = getCanonicalUrl(location.pathname);
    const resolvedImage = image ?? SITE.defaultImage;
    const resolvedImagePath = getPublicImageVariantPath(resolvedImage) ?? resolvedImage;
    const resolvedImageUrl = toAbsoluteUrl(resolvedImagePath);
    const resolvedImageAlt = imageAlt ?? SITE.defaultImageAlt;

    document.title = resolvedTitle;
    upsertMetaByName('description', description);

    upsertCanonicalLink(canonicalUrl);

    upsertMetaByProperty('og:title', resolvedTitle);
    upsertMetaByProperty('og:site_name', SITE.shortName);
    upsertMetaByProperty('og:description', description);
    upsertMetaByProperty('og:type', ogType);
    upsertMetaByProperty('og:url', canonicalUrl);
    upsertMetaByProperty('og:image', resolvedImageUrl);
    upsertMetaByProperty('og:image:alt', resolvedImageAlt);

    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', resolvedTitle);
    upsertMetaByName('twitter:description', description);
    upsertMetaByName('twitter:image', resolvedImageUrl);

    if (googleVerification) {
      upsertMetaByName('google-site-verification', googleVerification);
    } else {
      removeMetaByName('google-site-verification');
    }

    if (noIndex) {
      upsertMetaByName('robots', 'noindex, nofollow');
    } else {
      removeMetaByName('robots');
    }
  }, [description, image, imageAlt, location.pathname, noIndex, ogType, title]);

  return null;
};

export default Seo;
