import type { SponsorFeatureCard, SponsorPageContent } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';

interface SponsorPageProps {
  content: SponsorPageContent;
}

type SponsorSection = SponsorPageContent['sections'][number];

function SectionHeader({
  section,
  isPageTitle = false,
}: {
  section: SponsorSection;
  isPageTitle?: boolean;
}) {
  return (
    <header className="sponsor-section-header">
      <span className="sponsor-title-mark" aria-hidden="true" />
      {isPageTitle ? <h1>{section.heading}</h1> : <h2>{section.heading}</h2>}
      <span className="sponsor-pill">
        <span className="sponsor-pill-icon" aria-hidden="true" />
        {section.pillText}
      </span>
    </header>
  );
}

function BulletList({
  items,
  className = '',
}: {
  items?: string[];
  className?: string;
}) {
  if (!items?.length) return null;

  return (
    <ul className={`sponsor-bullet-list ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ImageFrame({ section }: { section: SponsorSection }) {
  if (!section.imagePath) return null;

  return (
    <figure className="sponsor-image-frame">
      <img src={getPublicAssetPath(section.imagePath)} alt={section.imageAlt ?? ''} loading="lazy" />
    </figure>
  );
}

function CardGrid({ cards, columns = 'two' }: { cards?: SponsorFeatureCard[]; columns?: 'two' | 'three' | 'four' }) {
  if (!cards?.length) return null;

  return (
    <div className={`sponsor-card-grid sponsor-card-grid-${columns}`}>
      {cards.map((card, index) => (
        <article className="sponsor-card" key={card.title}>
          <span className="sponsor-card-band" aria-hidden="true" />
          {card.icon && <span className={`sponsor-card-icon sponsor-card-icon-${card.icon}`} aria-hidden="true" />}
          {card.stat && <strong className="sponsor-card-stat">{card.stat}</strong>}
          <h3>{card.title}</h3>
          {card.body && <p>{card.body}</p>}
          <BulletList items={card.bullets} />
          {columns === 'three' && <span className="sponsor-step-number" aria-hidden="true">{index + 1}</span>}
        </article>
      ))}
    </div>
  );
}

function ScopeSection({ section }: { section: SponsorSection }) {
  return (
    <div className="sponsor-scope-layout">
      <article className="sponsor-open-copy sponsor-highlight-copy">
        <span className="sponsor-large-icon sponsor-large-icon-star" aria-hidden="true" />
        <h3>{section.leftTitle}</h3>
        <BulletList items={section.bullets} className="sponsor-check-list" />
      </article>
      <article className="sponsor-open-copy">
        <div className="sponsor-subhead-row">
          <span className="sponsor-large-icon sponsor-large-icon-group" aria-hidden="true" />
          <h3>{section.rightTitle}</h3>
        </div>
        <div className="sponsor-audience-grid">
          {section.audienceCards?.map((card) => (
            <article className="sponsor-card sponsor-audience-card" key={card.title}>
              <span className="sponsor-card-band" aria-hidden="true" />
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </article>
    </div>
  );
}

function ImageTextSection({ section }: { section: SponsorSection }) {
  return (
    <div className="sponsor-image-text-layout">
      <article className="sponsor-open-copy">
        <h3>{section.leftTitle}</h3>
        {section.body && <p>{section.body}</p>}
        <BulletList items={section.bullets} className="sponsor-icon-list" />
      </article>
      <ImageFrame section={section} />
    </div>
  );
}

function RetailSection({ section }: { section: SponsorSection }) {
  return (
    <div className="sponsor-image-text-layout sponsor-retail-layout">
      <ImageFrame section={section} />
      <article className="sponsor-open-copy">
        <h3>{section.rightTitle}</h3>
        {section.body && <p>{section.body}</p>}
        <CardGrid cards={section.cards} columns="two" />
      </article>
    </div>
  );
}

function ImageListSection({ section }: { section: SponsorSection }) {
  return (
    <div className="sponsor-image-text-layout sponsor-media-layout">
      <article className="sponsor-open-copy">
        <h3>{section.leftTitle}</h3>
        {section.body && <p>{section.body}</p>}
        <BulletList items={section.bullets} className="sponsor-plain-list" />
      </article>
      <ImageFrame section={section} />
    </div>
  );
}

function CardImageSection({ section }: { section: SponsorSection }) {
  return (
    <div className="sponsor-image-text-layout sponsor-card-image-layout">
      <CardGrid cards={section.cards} columns="two" />
      <ImageFrame section={section} />
    </div>
  );
}

function BenefitsSection({ section }: { section: SponsorSection }) {
  return (
    <div className="sponsor-benefit-grid">
      {section.benefits?.map((benefit) => (
        <div className="sponsor-benefit-item" key={benefit}>
          <span className="sponsor-benefit-check" aria-hidden="true" />
          <p>{benefit}</p>
        </div>
      ))}
    </div>
  );
}

function renderSectionBody(section: SponsorSection) {
  switch (section.variant) {
    case 'scope':
      return <ScopeSection section={section} />;
    case 'imageText':
      return <ImageTextSection section={section} />;
    case 'twoCards':
      return <CardGrid cards={section.cards} columns="two" />;
    case 'retail':
      return <RetailSection section={section} />;
    case 'stats':
      return <CardGrid cards={section.cards} columns="four" />;
    case 'imageList':
      return <ImageListSection section={section} />;
    case 'cardImage':
      return <CardImageSection section={section} />;
    case 'threeCards':
      return <CardGrid cards={section.cards} columns="three" />;
    case 'steps':
      return <CardGrid cards={section.cards} columns="three" />;
    case 'benefits':
      return <BenefitsSection section={section} />;
    default:
      return null;
  }
}

export function SponsorPage({ content }: SponsorPageProps) {
  return (
    <main className="sponsor-page">
      {content.sections.map((section, index) => (
        <section className={`sponsor-section sponsor-theme-${section.tone} sponsor-section-${section.variant}`} key={section.id}>
          <SectionHeader section={section} isPageTitle={index === 0} />
          {renderSectionBody(section)}
        </section>
      ))}
    </main>
  );
}
