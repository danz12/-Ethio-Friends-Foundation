import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getCanonicalUrl } from '@/lib/seo';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function normalizeMeasurementId(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (trimmed === 'G-XXXXXXXXXX') return null;
  return trimmed;
}

const Analytics = () => {
  const location = useLocation();
  const initialized = useRef(false);
  const measurementId = normalizeMeasurementId(import.meta.env.VITE_GA_MEASUREMENT_ID);

  useEffect(() => {
    if (!measurementId) return;

    const scriptId = 'ga-gtag';
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      ((...args: unknown[]) => {
        window.dataLayer?.push(args);
      });

    if (!initialized.current) {
      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        anonymize_ip: true,
        send_page_view: false,
      });
      initialized.current = true;
    }
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || !window.gtag) return;

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: getCanonicalUrl(location.pathname),
      page_path: `${location.pathname}${location.search}`,
    });
  }, [location.pathname, location.search, measurementId]);

  return null;
};

export default Analytics;

