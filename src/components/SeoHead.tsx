import { useEffect } from 'react';
import type { SeoEntry } from '../types/seo';

interface SeoHeadProps {
  seo: SeoEntry;
}

const jsonLdScriptId = 'mstar-route-jsonld';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  const existingCanonicals = Array.from(document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]'));
  const canonical = existingCanonicals[0] ?? document.createElement('link');

  canonical.setAttribute('rel', 'canonical');
  canonical.setAttribute('href', href);

  if (!canonical.parentElement) {
    document.head.appendChild(canonical);
  }

  existingCanonicals.slice(1).forEach((element) => element.remove());
}

function upsertJsonLd(seo: SeoEntry) {
  document.head.querySelector<HTMLScriptElement>(`#${jsonLdScriptId}`)?.remove();

  const script = document.createElement('script');
  script.id = jsonLdScriptId;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(seo.schema);
  document.head.appendChild(script);
}

export function SeoHead({ seo }: SeoHeadProps) {
  useEffect(() => {
    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'robots', seo.robots);
    upsertMeta('property', 'og:site_name', 'MSTAR Airsoft');
    upsertMeta('property', 'og:title', seo.ogTitle);
    upsertMeta('property', 'og:description', seo.ogDescription);
    upsertMeta('property', 'og:url', seo.canonical);
    upsertMeta('property', 'og:image', seo.ogImage);
    upsertMeta('property', 'og:type', seo.ogType);
    upsertMeta('name', 'twitter:card', seo.twitterCard);
    upsertMeta('name', 'twitter:title', seo.ogTitle);
    upsertMeta('name', 'twitter:description', seo.ogDescription);
    upsertMeta('name', 'twitter:image', seo.ogImage);
    upsertCanonical(seo.canonical);
    upsertJsonLd(seo);
  }, [seo]);

  return null;
}
