import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { BannerSlider } from './components/BannerSlider';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Registration } from './components/Registration';
import { Gallery } from './components/Gallery';
import { Rules } from './components/Rules';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EventsPage } from './components/EventsPage';
import { SignInPage } from './components/SignInPage';
import { CreateAccountPage } from './components/CreateAccountPage';
import { AccountSettingsPage } from './components/AccountSettingsPage';
import { EventDetailPage } from './components/EventDetailPage';
import { siteContent } from './data/siteContent';

function getRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#/events/')) return { name: 'eventDetail', eventId: hash.replace('#/events/', '') };
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
    window.location.hash = '#/account';
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

  useEffect(() => {
    if (route.name === 'home' && (window.location.hash === '#/' || window.location.hash === '')) {
      window.scrollTo({ top: 0 });
    }
  }, [route.name]);

  const isHome = route.name === 'home';
  const selectedEvent = route.name === 'eventDetail' ? siteContent.events.find((event) => event.id === route.eventId) : undefined;

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
          <Registration fields={siteContent.registrationFields} />
          <Rules rules={siteContent.rules} />
          <Gallery items={siteContent.gallery} />
          <Contact contact={siteContent.contact} />
        </main>
      )}
      {route.name === 'events' && <EventsPage events={siteContent.events} />}
      {route.name === 'eventDetail' && <EventDetailPage event={selectedEvent} />}
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
