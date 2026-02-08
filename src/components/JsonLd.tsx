import { useEffect } from 'react';

type JsonLdProps = {
  id: string;
  json: string | null;
};

const JsonLd = ({ id, json }: JsonLdProps) => {
  useEffect(() => {
    const existing = document.getElementById(id) as HTMLScriptElement | null;

    if (!json) {
      existing?.remove();
      return;
    }

    const script = existing ?? document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = json;

    if (!existing) {
      document.head.appendChild(script);
    }
  }, [id, json]);

  return null;
};

export default JsonLd;

