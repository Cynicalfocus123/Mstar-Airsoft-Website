import type { PackageOfferContent } from '../types/siteContent';

interface PackageOfferProps {
  content: PackageOfferContent;
}

export function PackageOffer({ content }: PackageOfferProps) {
  return (
    <section className="section section-anchor section-rib" id="package-offer">
      <div className="section-heading">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="package-offer-grid">
        <article className="event-card package-offer-card">
          <div className="card-topline">
            <span>{content.duration}</span>
            <strong>{content.price}</strong>
          </div>
          <h3>Package Offer</h3>
          <ul className="package-offer-list">
            {content.perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
