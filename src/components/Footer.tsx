import type { FooterSection, SiteIdentity } from '../types/siteContent';
import { getSafeInternalHref } from '../utils/safeUrl';

interface FooterProps {
  identity: SiteIdentity;
  sections: FooterSection[];
}

export function Footer({ identity, sections }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={identity.logoPath} alt={`${identity.name} logo`} />
        <div>
          <strong>{identity.name}</strong>
          <span>{identity.tagline}</span>
        </div>
      </div>
      <div className="footer-link-columns">
        {sections.map((section) => (
          <nav className="footer-link-group" key={section.title} aria-label={section.title}>
            <p className="footer-heading">{section.title}</p>
            <div className="footer-links">
              {section.links.map((link) => (
                <a
                  href={getSafeInternalHref(link.href)}
                  key={link.href}
                  onClick={(event) => {
                    if (link.label.toLowerCase() === 'gallery' || link.href === '/gallery') {
                      event.preventDefault();
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        ))}
      </div>
    </footer>
  );
}
