import type { PackageOfferContent } from '../types/siteContent';
import { PackageCard } from './PackageCard';

interface PackageOfferProps {
  content: PackageOfferContent;
}

export function PackageOffer({ content }: PackageOfferProps) {
  return (
    <section className="section section-anchor section-rib package-offer-section" id="package-offer">
      <div className="section-heading package-offer-heading">
        {content.eyebrow ? <p className="eyebrow">{content.eyebrow}</p> : null}
        <h2>{content.title}</h2>
      </div>
      <div className="package-offer-grid">
        {content.offers.map((offer) => (
          <PackageCard offer={offer} key={offer.label} />
        ))}
      </div>
    </section>
  );
}
