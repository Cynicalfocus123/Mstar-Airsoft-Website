import { useState } from 'react';
import type { NavLink, SiteIdentity } from '../types/siteContent';
import { getSafeInternalHref } from '../utils/safeUrl';

interface HeaderProps {
  identity: SiteIdentity;
  navLinks: NavLink[];
  isAuthenticated: boolean;
  onHomeClick: () => void;
  onLogout: () => void;
}

export function Header({ identity, navLinks, isAuthenticated, onHomeClick, onLogout }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <header className="site-header">
      <a
        className="brand"
        href={getSafeInternalHref('/')}
        aria-label={`${identity.name} home`}
        onClick={(event) => {
          event.preventDefault();
          setIsOpen(false);
          setIsAccountOpen(false);
          onHomeClick();
        }}
      >
        <img src={identity.logoPath} alt={`${identity.name} logo`} />
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
          <a
            key={link.href}
            href={getSafeInternalHref(link.href)}
            onClick={(event) => {
              setIsOpen(false);
              setIsAccountOpen(false);
              if (link.label.toLowerCase() === 'gallery' || link.href === '/gallery') {
                event.preventDefault();
                return;
              }
              if (link.href === '/') {
                event.preventDefault();
                onHomeClick();
              }
            }}
          >
            {link.label}
          </a>
        ))}
        {isAuthenticated && (
          <div className="header-actions">
            <div className={isAccountOpen ? 'account-menu account-menu-open' : 'account-menu'}>
              <button
                className="auth-link auth-link-signup account-menu-button"
                type="button"
                aria-expanded={isAccountOpen}
                aria-haspopup="menu"
                onClick={() => setIsAccountOpen((open) => !open)}
              >
                My Account
              </button>
              <div className="account-dropdown" role="menu">
                <a href={getSafeInternalHref('/account')} role="menuitem" onClick={() => { setIsOpen(false); setIsAccountOpen(false); }}>
                  Account Settings
                </a>
                <a href={getSafeInternalHref('/account')} role="menuitem" onClick={() => { setIsOpen(false); setIsAccountOpen(false); }}>
                  Orders
                </a>
                <button
                  className="account-dropdown-button"
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setIsOpen(false);
                    setIsAccountOpen(false);
                    onLogout();
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
