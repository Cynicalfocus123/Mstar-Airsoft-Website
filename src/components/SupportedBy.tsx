import type { SupportedByContent } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';

interface SupportedByProps {
  content: SupportedByContent;
}

export function SupportedBy({ content }: SupportedByProps) {
  return (
    <section className="supported-by-section" aria-label="Event support">
      <div className="supported-by-inner">
        <p className="supported-by-label">Supported by</p>
        <p className="supported-by-title">{content.title}</p>
        <a
          className="supported-by-logo-link"
          href="https://thaiairsoft.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit the National Thailand Airsoft and Paintball Association"
        >
          <img
            className="supported-by-logo"
            src={getPublicAssetPath(content.imagePath)}
            alt={content.imageAlt}
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
}
