import type { InfoPageContent } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';

interface InfoPageProps {
  content?: InfoPageContent;
}

export function InfoPage({ content }: InfoPageProps) {
  if (!content) {
    return (
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">Placeholder</p>
          <h1>Page Not Ready</h1>
          <p>This section has not been configured yet.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section
        className={`page-hero ${content.heroAlign === 'center' ? 'page-hero-centered' : ''} ${content.sections ? 'page-hero-legal' : ''}`}
      >
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </section>
      {content.cards && (
        <section className="info-banner-list" aria-label={content.title}>
          {content.cards.map((card) => {
            const cardBody = (
              <>
                <div className="event-card-image info-card-image">
                  <img src={getPublicAssetPath(card.imagePath)} alt="" loading="lazy" />
                  {card.badge && <strong>{card.badge}</strong>}
                </div>
                <div className="event-banner-content info-banner-content">
                  <h2>{card.title}</h2>
                  <p>{card.summary}</p>
                  <div className="info-card-placeholder">
                    {card.placeholderLabel ?? 'Placeholder content box'}
                  </div>
                </div>
              </>
            );

            if (card.href) {
              return (
                <a className="event-banner-card info-banner-card" key={card.id} href={card.href} aria-label={`Open ${card.title}`}>
                  {cardBody}
                </a>
              );
            }

            return (
              <article className="event-banner-card info-banner-card" key={card.id}>
                {cardBody}
              </article>
            );
          })}
        </section>
      )}
      {content.sections && (
        <section className="policy-layout" aria-label={content.title}>
          {content.sections.map((section) => (
            <article className="policy-section" key={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="policy-bullet-list">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
