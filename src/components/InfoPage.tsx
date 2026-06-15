import type { InfoPageContent } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';
import { getSafeMailtoHref } from '../utils/safeUrl';

interface InfoPageProps {
  content?: InfoPageContent;
}

const unboxedPolicySlugs = new Set([
  'terms-and-conditions',
  'privacy',
  'complaints',
  'equipment',
  'how-to-get-to-the-event',
  'immigration-visa',
  'accommodation-and-campground',
  'activity',
  'contact',
]);

const hiddenHeroSlugs = new Set([
  'activity',
  'how-to-get-to-the-event',
  'immigration-visa',
  'equipment',
]);

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

  const isActivityPage = content.slug === 'activity';
  const shouldShowHero = !hiddenHeroSlugs.has(content.slug);
  const policyClassName = [
    'policy-layout',
    content.slug === 'rules-and-regulation' ? 'policy-layout-rules' : '',
    unboxedPolicySlugs.has(content.slug) ? 'policy-layout-plain' : '',
    content.slug === 'contact' ? 'policy-layout-contact' : '',
    content.slug === 'accommodation-and-campground' ? 'policy-layout-accommodation' : '',
  ].filter(Boolean).join(' ');

  return (
    <main className="page-shell">
      {shouldShowHero && (
        <section
          className={`page-hero ${content.heroAlign === 'center' ? 'page-hero-centered' : ''} ${content.sections ? 'page-hero-legal' : ''} ${content.slug === 'things-to-know' ? 'page-hero-guide-index' : ''} ${content.slug === 'accommodation-and-campground' ? 'page-hero-accommodation' : ''}`}
        >
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          {content.description && <p>{content.description}</p>}
        </section>
      )}
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
        <section
          className={policyClassName}
          aria-label={content.title}
        >
          {content.sections.map((section) => (
            <article className="policy-section" key={section.id}>
              <h2 className={isActivityPage && section.id === 'activity-overview' ? 'activity-section-heading' : undefined}>
                {isActivityPage && section.id === 'activity-overview' ? (
                  <>
                    <span>Activities</span>
                    <span className="activity-section-heading-amp">&amp;</span>
                    <span>Entertainment Experience</span>
                  </>
                ) : section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.images && (
                <div className="policy-image-grid">
                  {section.images.map((image) => (
                    <figure className="policy-image-card" key={image.src}>
                      <img src={getPublicAssetPath(image.src)} alt={image.alt} loading="lazy" />
                      {image.title && <figcaption>{image.title}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}
              {section.bullets && (
                <ul className="policy-bullet-list">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.links && (
                <ul className="policy-link-list">
                  {section.links.map((link) => {
                    const safeHref = getSafeMailtoHref(link.href);

                    return safeHref ? (
                      <li key={link.href}>
                        <a href={safeHref}>{link.label}</a>
                      </li>
                    ) : null;
                  })}
                </ul>
              )}
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
