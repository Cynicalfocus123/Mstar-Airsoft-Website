import type { SponsorPageContent } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';

interface SponsorPageProps {
  content: SponsorPageContent;
}

function SectionHeader({
  heading,
  pillText,
  tone,
  isPageTitle = false,
}: {
  heading: string;
  pillText: string;
  tone: 'green' | 'orange';
  isPageTitle?: boolean;
}) {
  return (
    <header className="sponsor-section-header">
      {isPageTitle ? <h1>{heading}</h1> : <h2>{heading}</h2>}
      <span className={`sponsor-pill sponsor-pill-${tone}`}>{pillText}</span>
    </header>
  );
}

export function SponsorPage({ content }: SponsorPageProps) {
  return (
    <main className="sponsor-page">
      <section className="sponsor-section sponsor-section-scope sponsor-theme-green">
        <SectionHeader heading={content.scopeSection.heading} pillText={content.scopeSection.pillText} tone="green" isPageTitle />
        <div className="sponsor-scope-grid">
          <article className="sponsor-copy-panel">
            <span className="sponsor-accent-bar" aria-hidden="true" />
            <h3>{content.scopeSection.leftTitle}</h3>
            <ul className="sponsor-feature-list">
              {content.scopeSection.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="sponsor-audience-panel">
            <h3>{content.scopeSection.rightTitle}</h3>
            <div className="sponsor-audience-grid">
              {content.scopeSection.cards.map((card) => (
                <div className="sponsor-mini-card" key={card.title}>
                  <span className="sponsor-icon-box" aria-hidden="true">{card.iconLabel}</span>
                  <h4>{card.title}</h4>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="sponsor-section sponsor-theme-orange">
        <SectionHeader heading={content.vendorSection.heading} pillText={content.vendorSection.pillText} tone="orange" />
        <div className="sponsor-image-grid">
          <article className="sponsor-copy-panel">
            <span className="sponsor-accent-bar" aria-hidden="true" />
            <h3>{content.vendorSection.contentTitle}</h3>
            <p>{content.vendorSection.body}</p>
            <ul className="sponsor-feature-list">
              {content.vendorSection.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <figure className="sponsor-image-frame">
            <img src={getPublicAssetPath(content.vendorSection.imagePath)} alt={content.vendorSection.imageAlt} loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="sponsor-section sponsor-theme-orange">
        <SectionHeader heading={content.foodSection.heading} pillText={content.foodSection.pillText} tone="orange" />
        <div className="sponsor-large-card-grid">
          {content.foodSection.cards.map((card) => (
            <article className="sponsor-large-card" key={card.title}>
              <span className="sponsor-card-topline" aria-hidden="true" />
              <h3>{card.title}</h3>
              {card.bullets && (
                <ul className="sponsor-feature-list">
                  {card.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="sponsor-section sponsor-theme-orange">
        <SectionHeader heading={content.retailSection.heading} pillText={content.retailSection.pillText} tone="orange" />
        <div className="sponsor-image-grid sponsor-image-grid-reverse">
          <figure className="sponsor-image-frame sponsor-retail-image-frame">
            <img src={getPublicAssetPath(content.retailSection.imagePath)} alt={content.retailSection.imageAlt} loading="lazy" />
          </figure>
          <article className="sponsor-copy-panel sponsor-retail-copy">
            <span className="sponsor-accent-bar" aria-hidden="true" />
            <h3>{content.retailSection.contentTitle}</h3>
            <p>{content.retailSection.body}</p>
            <div className="sponsor-retail-card-grid">
              {content.retailSection.cards.map((card) => (
                <div className="sponsor-mini-card" key={card.title}>
                  {card.iconLabel && <span className="sponsor-icon-box" aria-hidden="true">{card.iconLabel}</span>}
                  <h4>{card.title}</h4>
                  {card.body && <p>{card.body}</p>}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
