import type { FooterSection, SiteIdentity } from '../types/siteContent';
import { getSafeInternalHash } from '../utils/safeUrl';

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
                <a href={getSafeInternalHash(link.href)} key={link.href}>
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
