import type { ContactContent, NavLink, SiteIdentity } from '../types/siteContent';

interface FooterProps {
  identity: SiteIdentity;
  links: NavLink[];
  contact: ContactContent;
}

export function Footer({ identity, links, contact }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={identity.logoPath} alt={`${identity.name} logo`} />
        <div>
          <strong>{identity.name}</strong>
          <span>{identity.tagline}</span>
        </div>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="footer-contact">
        <span>{contact.email}</span>
        <span>{contact.social}</span>
        <span>{contact.location}</span>
      </div>
    </footer>
  );
}
