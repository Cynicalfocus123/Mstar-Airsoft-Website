import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { BannerSlider } from './components/BannerSlider';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Rules } from './components/Rules';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EventsPage } from './components/EventsPage';
import { SignInPage } from './components/SignInPage';
import { CreateAccountPage } from './components/CreateAccountPage';
import { AccountSettingsPage } from './components/AccountSettingsPage';
import { EventDetailPage } from './components/EventDetailPage';
import { EventCheckoutPage } from './components/EventCheckoutPage';
import { siteContent } from './data/siteContent';

function getRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#/events/')) return { name: 'eventDetail', eventId: hash.replace('#/events/', '') };
  if (hash.startsWith('#/checkout/')) return { name: 'checkout', eventId: hash.replace('#/checkout/', '') };
  if (hash.startsWith('#/events')) return { name: 'events' };
  if (hash.startsWith('#/signin')) return { name: 'signin' };
  if (hash.startsWith('#/signup')) return { name: 'signup' };
  if (hash.startsWith('#/account')) return { name: 'account' };
  return { name: 'home' };
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
    if (window.location.hash === '#/' || window.location.hash === '') {
      setRoute({ name: 'home' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.location.hash = '#/';
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

  useEffect(() => {
    const hash = window.location.hash;

    if (route.name === 'home' && hash && hash !== '#/') {
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [route.name, selectedEvent?.id]);

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
          <Events events={siteContent.events.slice(0, 3)} viewAllHref="#/events" />
          <Rules rules={siteContent.rules} />
          <Gallery items={siteContent.gallery} />
          <Contact contact={siteContent.contact} />
        </main>
      )}
      {route.name === 'events' && <EventsPage events={siteContent.events} />}
      {route.name === 'eventDetail' && <EventDetailPage event={selectedEvent} isAuthenticated={isAuthenticated} />}
      {route.name === 'checkout' && <EventCheckoutPage event={selectedEvent} isAuthenticated={isAuthenticated} />}
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
        links={siteContent.footerLinks}
        contact={siteContent.contact}
      />
    </>
  );
}
