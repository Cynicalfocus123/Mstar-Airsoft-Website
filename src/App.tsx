import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { BannerSlider } from './components/BannerSlider';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PackageOffer } from './components/PackageOffer';
import { Events } from './components/Events';
import { GameTerrain } from './components/GameTerrain';
import { Footer } from './components/Footer';
import { EventsPage } from './components/EventsPage';
import { SignInPage } from './components/SignInPage';
import { CreateAccountPage } from './components/CreateAccountPage';
import { AccountSettingsPage } from './components/AccountSettingsPage';
import { EventDetailPage } from './components/EventDetailPage';
import { EventCheckoutPage } from './components/EventCheckoutPage';
import { InfoPage } from './components/InfoPage';
import { TicketPage } from './components/TicketPage';
import { siteContent } from './data/siteContent';

function getRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#/events/')) return { name: 'eventDetail', eventId: hash.replace('#/events/', '') };
  if (hash.startsWith('#/checkout/')) return { name: 'checkout', eventId: hash.replace('#/checkout/', '') };
  if (hash.startsWith('#/events')) return { name: 'events' };
  if (hash.startsWith('#/ticket')) return { name: 'ticket' };
  if (hash.startsWith('#/signin')) return { name: 'signin' };
  if (hash.startsWith('#/signup')) return { name: 'signup' };
  if (hash.startsWith('#/account')) return { name: 'account' };
  if (hash.startsWith('#/')) {
    const section = hash.replace('#/', '') || 'home';
    const slug = section.split('/')[0];
    if (siteContent.infoPages.some((page) => page.slug === slug)) {
      return { name: 'info', slug };
    }
    return { name: 'home', section };
  }
  if (hash.startsWith('#')) {
    return { name: 'home', section: hash.replace('#', '') || 'home' };
  }
  return { name: 'home', section: 'home' };
}

export default function App() {
  const [route, setRoute] = useState(getRoute);
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('mstarAccountStatus') === 'active');

  useEffect(() => {
    function handleHashChange() {
      setRoute(getRoute());
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  function markSignedIn() {
    localStorage.setItem('mstarAccountStatus', 'active');
    setIsAuthenticated(true);
    const returnTo = sessionStorage.getItem('mstarAuthReturnTo');
    sessionStorage.removeItem('mstarAuthReturnTo');

    if (returnTo && !returnTo.startsWith('#/signin') && !returnTo.startsWith('#/signup')) {
      window.location.hash = returnTo;
      return;
    }

    setRoute(getRoute());
  }

  function goHomeTop() {
    if (window.location.hash === '#/home' || window.location.hash === '#/' || window.location.hash === '') {
      setRoute({ name: 'home', section: 'home' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.location.hash = '#/home';
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  }

  function logout() {
    localStorage.removeItem('mstarAccountStatus');
    setIsAuthenticated(false);
    goHomeTop();
  }

  const isHome = route.name === 'home';
  const selectedEvent = route.name === 'eventDetail' || route.name === 'checkout'
    ? siteContent.events.find((event) => event.id === route.eventId)
    : undefined;
  const selectedInfoPage = route.name === 'info'
    ? siteContent.infoPages.find((page) => page.slug === route.slug)
    : undefined;

  useEffect(() => {
    if (route.name === 'home' && route.section && route.section !== 'home') {
      const target = document.getElementById(route.section);
      if (target) {
        target.scrollIntoView({ block: 'start' });
      }
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [route.name, route.section, route.slug, selectedEvent?.id]);

  return (
    <>
      <Header
        identity={siteContent.identity}
        navLinks={siteContent.navLinks}
        authLinks={siteContent.authLinks}
        isAuthenticated={isAuthenticated}
        onHomeClick={goHomeTop}
        onLogout={logout}
      />
      {isHome && (
        <main>
          <BannerSlider slides={siteContent.heroSlides} />
          <Hero content={siteContent.hero} />
          <About content={siteContent.about} />
          <PackageOffer content={siteContent.packageOffer} />
          <Events events={siteContent.events.slice(0, 3)} viewAllHref="#/events" />
          <GameTerrain content={siteContent.gameTerrain} />
        </main>
      )}
      {route.name === 'events' && <EventsPage events={siteContent.events} />}
      {route.name === 'ticket' && <TicketPage content={siteContent.ticketPage} />}
      {route.name === 'eventDetail' && <EventDetailPage event={selectedEvent} isAuthenticated={isAuthenticated} />}
      {route.name === 'checkout' && <EventCheckoutPage event={selectedEvent} isAuthenticated={isAuthenticated} />}
      {route.name === 'info' && <InfoPage content={selectedInfoPage} />}
      {route.name === 'signin' && <SignInPage content={siteContent.signIn} onSuccess={markSignedIn} />}
      {route.name === 'signup' && (
        <CreateAccountPage
          content={siteContent.createAccount}
          countryRegions={siteContent.countryRegions}
          onSuccess={markSignedIn}
        />
      )}
      {route.name === 'account' && (
        <AccountSettingsPage
          content={siteContent.createAccount}
          countryRegions={siteContent.countryRegions}
        />
      )}
      <Footer
        identity={siteContent.identity}
        sections={siteContent.footerSections}
      />
    </>
  );
}
