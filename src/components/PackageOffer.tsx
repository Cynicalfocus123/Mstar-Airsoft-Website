import type { PackageOfferContent } from '../types/siteContent';

interface PackageOfferProps {
  content: PackageOfferContent;
}

export function PackageOffer({ content }: PackageOfferProps) {
  return (
    <section className="section section-anchor section-rib package-offer-section" id="package-offer">
      <div className="section-heading package-offer-heading">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="package-offer-grid">
        {content.offers.map((offer) => (
          <article className="event-card package-offer-card" key={offer.label}>
            <header className="package-offer-card-header">
              <h3>{offer.label}</h3>
            </header>
            <div className="package-offer-values">
              <div className="package-offer-value">
                <span>Price</span>
                <strong>{offer.price}</strong>
              </div>
              <p className="package-offer-detail">{offer.detail}</p>
            </div>
            <ul className="package-offer-list">
              {offer.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
