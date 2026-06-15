import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { BannerSlider } from './components/BannerSlider';
import { Hero } from './components/Hero';
import { About } from './components/About';
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
import { getSafeInternalPath } from './utils/safeUrl';

function getRoute() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path.startsWith('/events/')) return { name: 'eventDetail', eventId: path.replace('/events/', '') };
  if (path.startsWith('/checkout/')) return { name: 'checkout', eventId: path.replace('/checkout/', '') };
  if (path === '/events') return { name: 'events' };
  if (path === '/ticket') return { name: 'ticket' };
  if (path === '/signin') return { name: 'signin' };
  if (path === '/signup') return { name: 'signup' };
  if (path === '/account') return { name: 'account' };
  if (path !== '/') {
    const section = path.slice(1) || 'home';
    const slug = section.split('/')[0];

    if (siteContent.infoPages.some((page) => page.slug === slug)) return { name: 'info', slug };

    return { name: 'home', section };
  }

  return { name: 'home', section: 'home' };
}

export default function App() {
  const [route, setRoute] = useState(getRoute);
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('mstarAccountStatus') === 'active');

  useEffect(() => {
    function handleRouteChange() {
      setRoute(getRoute());
    }

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  function navigateTo(path: string) {
    window.history.pushState(null, '', path);
    setRoute(getRoute());
  }

  function markSignedIn() {
    localStorage.setItem('mstarAccountStatus', 'active');
    setIsAuthenticated(true);
    const returnTo = sessionStorage.getItem('mstarAuthReturnTo');
    sessionStorage.removeItem('mstarAuthReturnTo');

    const safeReturnTo = returnTo ? getSafeInternalPath(returnTo) : undefined;
    if (safeReturnTo && !safeReturnTo.startsWith('/signin') && !safeReturnTo.startsWith('/signup')) {
      navigateTo(safeReturnTo);
      return;
    }

    setRoute(getRoute());
  }

  function goHomeTop() {
    if (window.location.pathname === '/') {
      setRoute({ name: 'home', section: 'home' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigateTo('/');
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
        isAuthenticated={isAuthenticated}
        onHomeClick={goHomeTop}
        onLogout={logout}
      />
      {isHome && (
        <main>
          <BannerSlider slides={siteContent.heroSlides} />
          <Hero content={siteContent.hero} />
          <About content={siteContent.about} />
          <Events events={siteContent.events.slice(0, 3)} viewAllHref="/events" />
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
