import type { ContactContent } from '../types/siteContent';

interface ContactProps {
  contact: ContactContent;
}

export function Contact({ contact }: ContactProps) {
  return (
    <section className="section contact section-anchor" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Command Desk</p>
        <h2>Contact</h2>
      </div>
      <div className="contact-grid">
        <div>
          <span>Email</span>
          <strong>{contact.email}</strong>
        </div>
        <div>
          <span>Social</span>
          <strong>{contact.social}</strong>
        </div>
        <div>
          <span>Location</span>
          <strong>{contact.location}</strong>
        </div>
      </div>
    </section>
  );
}
