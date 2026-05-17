import { useState } from 'react';
import type { NavLink, SiteIdentity } from '../types/siteContent';

interface HeaderProps {
  identity: SiteIdentity;
  navLinks: NavLink[];
  authLinks: NavLink[];
}

export function Header({ identity, navLinks, authLinks }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#/" aria-label={`${identity.name} home`}>
        <img src={identity.logoPath} alt={`${identity.name} logo`} />
        <span>{identity.name}</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="site-nav" className={isOpen ? 'nav nav-open' : 'nav'} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="header-actions">
          {authLinks.map((link, index) => (
            <a
              className={index === 0 ? 'auth-link auth-link-login' : 'auth-link auth-link-signup'}
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
