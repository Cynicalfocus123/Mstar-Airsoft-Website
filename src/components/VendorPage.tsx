import type { VendorPageContent } from '../types/siteContent';
import { getSafeGoogleFormUrl, getSafeInternalHref } from '../utils/safeUrl';

interface VendorPageProps {
  content: VendorPageContent;
}

export function VendorPage({ content }: VendorPageProps) {
  const formUrl = getSafeGoogleFormUrl(content.formUrl);

  return (
    <main className="vendor-page">
      <section className="vendor-page-panel">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <div className="vendor-page-divider" aria-hidden="true" />
        <h2>{content.sectionTitle}</h2>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {formUrl && (
          <a
            className="btn btn-gold vendor-page-button"
            href={formUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {content.buttonLabel}
          </a>
        )}
        {content.sponsorLink && (
          <a className="vendor-page-sponsor-link" href={getSafeInternalHref(content.sponsorLink.href)}>
            {content.sponsorLink.label}
          </a>
        )}
      </section>
    </main>
  );
}
