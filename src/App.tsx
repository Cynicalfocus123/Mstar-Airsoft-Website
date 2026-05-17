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
import { siteContent } from './data/siteContent';

function getRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#/events')) return 'events';
  if (hash.startsWith('#/signin')) return 'signin';
  if (hash.startsWith('#/signup')) return 'signup';
  return 'home';
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    function handleHashChange() {
      setRoute(getRoute());
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isHome = route === 'home';

  return (
    <>
      <Header
        identity={siteContent.identity}
        navLinks={siteContent.navLinks}
        authLinks={siteContent.authLinks}
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
      {route === 'events' && <EventsPage events={siteContent.events} />}
      {route === 'signin' && <SignInPage content={siteContent.signIn} />}
      {route === 'signup' && (
        <CreateAccountPage
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
