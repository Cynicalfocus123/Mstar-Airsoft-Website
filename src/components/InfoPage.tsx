import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { InfoPageContent, InfoSection } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';
import { getSafeInternalHref, getSafeMailtoHref } from '../utils/safeUrl';

interface InfoPageProps {
  content?: InfoPageContent;
}

const unboxedPolicySlugs = new Set([
  'terms-and-conditions',
  'cancellation-and-refund',
  'privacy',
  'complaints',
  'equipment',
  'how-to-get-to-the-event',
  'immigration-visa',
  'accommodation-and-campground',
  'activity',
  'contact',
]);

function getSafeInfoLinkHref(value: string) {
  const mailtoHref = getSafeMailtoHref(value);
  if (mailtoHref) return mailtoHref;

  const [path, hash] = value.split('#');
  const safePath = getSafeInternalHref(path, '');
  if (!safePath) return undefined;
  if (!hash) return safePath;
  return /^[a-z0-9-]+$/i.test(hash) ? `${safePath}#${hash}` : undefined;
}

const hiddenHeroSlugs = new Set([
  'activity',
  'how-to-get-to-the-event',
  'immigration-visa',
  'equipment',
]);

function renderPolicyItems(section: InfoSection) {
  if (!section.items) return null;

  const nodes: ReactNode[] = [];
  let bulletGroup: string[] = [];

  const flushBullets = () => {
    if (!bulletGroup.length) return;

    nodes.push(
      <ul className="policy-bullet-list" key={`bullets-${nodes.length}`}>
        {bulletGroup.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>,
    );
    bulletGroup = [];
  };

  section.items.forEach((item, index) => {
    if (item.type === 'bullet') {
      bulletGroup.push(item.text);
      return;
    }

    flushBullets();
    nodes.push(<p key={`${section.id}-paragraph-${index}`}>{item.text}</p>);
  });

  flushBullets();
  return nodes;
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

  const isActivityPage = content.slug === 'activity';
  const shouldShowHero = !hiddenHeroSlugs.has(content.slug);
  const [activeLanguageId, setActiveLanguageId] = useState(content.languageVersions?.[0]?.id);

  useEffect(() => {
    setActiveLanguageId(content.languageVersions?.[0]?.id);
  }, [content.slug, content.languageVersions]);

  const activeLanguage = content.languageVersions?.find((language) => language.id === activeLanguageId) ?? content.languageVersions?.[0];
  const isDefaultLanguage = Boolean(activeLanguage && activeLanguage.id === content.languageVersions?.[0]?.id);
  const visibleSections = isDefaultLanguage && content.sections ? content.sections : activeLanguage?.sections ?? content.sections;
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
                <a className="event-banner-card info-banner-card" key={card.id} href={getSafeInternalHref(card.href)} aria-label={`Open ${card.title}`}>
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
      {content.languageVersions && (
        <div className="policy-language-toggle" aria-label={`${content.title} language`}>
          {content.languageVersions.map((language) => (
            <button
              className={`policy-language-button ${language.id === activeLanguage?.id ? 'policy-language-button-active' : ''}`}
              type="button"
              onClick={() => setActiveLanguageId(language.id)}
              aria-pressed={language.id === activeLanguage?.id}
              key={language.id}
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
      {visibleSections && (
        <section
          className={policyClassName}
          aria-label={content.title}
          lang={activeLanguage?.lang}
        >
          {visibleSections.map((section) => (
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
              {renderPolicyItems(section)}
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
                    const safeHref = getSafeInfoLinkHref(link.href);

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
