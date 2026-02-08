import { useMemo } from 'react';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbListJsonLd, buildFAQPageJsonLd, buildOrganizationJsonLd, buildWebSiteJsonLd, type BreadcrumbItem, type FaqItem } from '@/lib/schema';

type StructuredDataProps = {
  breadcrumbs: BreadcrumbItem[];
  faqs?: FaqItem[];
  faqPagePath?: string;
};

const StructuredData = ({ breadcrumbs, faqs, faqPagePath }: StructuredDataProps) => {
  const orgJson = useMemo(() => JSON.stringify(buildOrganizationJsonLd()), []);
  const websiteJson = useMemo(() => JSON.stringify(buildWebSiteJsonLd()), []);
  const breadcrumbJson = useMemo(() => JSON.stringify(buildBreadcrumbListJsonLd(breadcrumbs)), [breadcrumbs]);
  const faqJson = useMemo(() => {
    if (!faqs?.length) return null;
    return JSON.stringify(buildFAQPageJsonLd(faqs, faqPagePath));
  }, [faqPagePath, faqs]);

  return (
    <>
      <JsonLd id="ld-org" json={orgJson} />
      <JsonLd id="ld-website" json={websiteJson} />
      <JsonLd id="ld-breadcrumb" json={breadcrumbJson} />
      <JsonLd id="ld-faq" json={faqJson} />
    </>
  );
};

export default StructuredData;

