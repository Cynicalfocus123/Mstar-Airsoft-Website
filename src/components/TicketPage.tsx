import type { TicketPageContent } from '../types/siteContent';
import { PackageCard } from './PackageCard';

interface TicketPageProps {
  content: TicketPageContent;
}

export function TicketPage({ content }: TicketPageProps) {
  return (
    <main className="page-shell ticket-page">
      <section className="page-hero ticket-page-hero">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </section>
      <section className="ticket-package-grid" aria-label="Ticket packages">
        {content.packages.map((offer) => (
          <PackageCard offer={offer} key={offer.label} />
        ))}
      </section>
      <section className="ticket-addons" aria-labelledby="ticket-addons-title">
        <div className="ticket-section-heading">
          <p className="eyebrow">Camping Extras</p>
          <h2 id="ticket-addons-title">Add-Ons</h2>
        </div>
        <div className="ticket-addon-grid">
          {content.addons.map((addon) => (
            <article className="ticket-addon-card" key={addon.title}>
              <h3>{addon.title}</h3>
              <p>{addon.price}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
