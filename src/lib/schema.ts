import { SITE } from '@/lib/site';
import { getCanonicalUrl } from '@/lib/seo';

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export function buildOrganizationJsonLd() {
  const url = getCanonicalUrl('/');
  const logo = getCanonicalUrl('/favicon.svg');

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${url}#organization`,
    name: SITE.name,
    url,
    description: SITE.description,
    logo,
    foundingDate: '2022',
    email: 'info@effr.org',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Addis Ababa',
      addressCountry: 'ET',
    },
  };
}

export function buildWebSiteJsonLd() {
  const url = getCanonicalUrl('/');

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${url}#website`,
    url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'en',
    publisher: { '@id': `${url}#organization` },
  };
}

export function buildBreadcrumbListJsonLd(breadcrumbs: BreadcrumbItem[]) {
  const currentPath = breadcrumbs[breadcrumbs.length - 1]?.path ?? '/';
  const currentUrl = getCanonicalUrl(currentPath);

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${currentUrl}#breadcrumb`,
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: getCanonicalUrl(crumb.path),
    })),
  };
}

export function buildFAQPageJsonLd(faqs: FaqItem[], pagePath = '/contact') {
  const pageUrl = getCanonicalUrl(pagePath);

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
