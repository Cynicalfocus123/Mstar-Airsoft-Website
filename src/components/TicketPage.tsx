import type { TicketPageContent } from '../types/siteContent';
import { PackageCard } from './PackageCard';
import { StripeBuyButton } from './StripeBuyButton';

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
              <p className="ticket-addon-price">{addon.price}</p>
              <p className="ticket-addon-description">{addon.description}</p>
              <StripeBuyButton
                buyButtonId={addon.stripeBuyButtonId}
                publishableKey={addon.stripePublishableKey}
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
