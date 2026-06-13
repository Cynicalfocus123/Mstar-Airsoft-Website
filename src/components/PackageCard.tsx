import type { PackageOfferItem } from '../types/siteContent';

interface PackageCardProps {
  offer: PackageOfferItem;
}

export function PackageCard({ offer }: PackageCardProps) {
  return (
    <article className="event-card package-offer-card">
      <header className="package-offer-card-header">
        <h3>{offer.label}</h3>
      </header>
      <div className="package-offer-values">
        <div className="package-offer-value">
          <span>Price</span>
          <strong>{offer.price}</strong>
        </div>
        <div className="package-offer-details">
          {offer.details.map((detail) => (
            <p className="package-offer-detail" key={detail}>{detail}</p>
          ))}
        </div>
      </div>
      <ul className="package-offer-list">
        {offer.perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>
    </article>
  );
}
