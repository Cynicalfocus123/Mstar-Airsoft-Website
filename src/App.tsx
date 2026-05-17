import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Registration } from './components/Registration';
import { Gallery } from './components/Gallery';
import { Rules } from './components/Rules';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { siteContent } from './data/siteContent';

export default function App() {
  return (
    <>
      <Header identity={siteContent.identity} navLinks={siteContent.navLinks} />
      <main>
        <Hero content={siteContent.hero} />
        <About content={siteContent.about} />
        <Events events={siteContent.events} />
        <Registration fields={siteContent.registrationFields} />
        <Rules rules={siteContent.rules} />
        <Gallery items={siteContent.gallery} />
        <Contact contact={siteContent.contact} />
      </main>
      <Footer
        identity={siteContent.identity}
        links={siteContent.footerLinks}
        contact={siteContent.contact}
      />
    </>
  );
}
