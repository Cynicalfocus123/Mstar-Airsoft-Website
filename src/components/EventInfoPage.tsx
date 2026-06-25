import { useState } from 'react';
import type { EventCard } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';
import { getSafeInternalHref } from '../utils/safeUrl';

interface EventInfoPageProps {
  event?: EventCard;
}

export function EventInfoPage({ event }: EventInfoPageProps) {
  const eventInfo = event?.detail?.eventInfo;
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'th'>(eventInfo?.defaultLanguage ?? 'en');
  const activeContent =
    eventInfo?.languages.find((language) => language.code === activeLanguage) ??
    eventInfo?.languages.find((language) => language.code === eventInfo.defaultLanguage) ??
    eventInfo?.languages[0];

  if (!event || !eventInfo || !activeContent) {
    return (
      <main className="page-shell">
        <section className="page-hero">
          <h1>Event Info Not Available</h1>
          <a className="btn btn-gold" href={getSafeInternalHref('/events/force-of-conquest')}>
            Back to Event
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className={`event-info-page event-info-page-${activeContent.code}`} lang={activeContent.htmlLang}>
      <section className="event-info-hero">
        <h1>{activeContent.pageTitle}</h1>
        <p>{activeContent.pageSubtitle}</p>
        <div className="event-info-language-toggle" aria-label="Event Info language">
          {eventInfo.languages.map((language) => (
            <button
              aria-pressed={activeContent.code === language.code}
              className={activeContent.code === language.code ? 'is-active' : ''}
              key={language.code}
              onClick={() => setActiveLanguage(language.code)}
              type="button"
            >
              {language.label}
            </button>
          ))}
        </div>
        <a className="btn btn-secondary" href={getSafeInternalHref(event.href ?? '/events/force-of-conquest')}>
          Back to Event
        </a>
      </section>

      <div className="event-info-sections">
        {activeContent.sections.map((section, index) => {
          const hasMedia = Boolean(section.imagePath || section.placeholderLabel);
          const sectionClassName = [
            'event-info-split',
            index % 2 === 1 ? 'event-info-split-reverse' : '',
            hasMedia ? '' : 'event-info-split-text-only',
            section.id ? `event-info-section-${section.id}` : '',
          ].filter(Boolean).join(' ');

          return (
            <section className={sectionClassName} key={section.id ?? section.title ?? `${activeContent.code}-${index}`}>
              {hasMedia && (
                <div className="event-info-media">
                  {section.imagePath ? (
                    <img
                      alt={section.imageAlt ?? ''}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      src={getPublicAssetPath(section.imagePath)}
                    />
                  ) : (
                    <div className="event-info-placeholder" aria-label={section.placeholderLabel ?? 'Image Coming Soon'}>
                      <span>{section.placeholderLabel ?? 'Image Coming Soon'}</span>
                    </div>
                  )}
                </div>
              )}
              <article className="event-info-copy">
                {section.subtitle && <p className="event-info-subtitle">{section.subtitle}</p>}
                {section.title && <h2>{section.title}</h2>}
                {section.headline && <strong className="event-info-headline">{section.headline}</strong>}
                {section.dateLine && <p className="event-info-date">{section.dateLine}</p>}
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.factionPanels && (
                  <div className="event-info-faction-dress-grid">
                    {section.factionPanels.map((panel) => (
                      <div
                        aria-label={panel.imageAlt}
                        className="event-info-faction-dress-panel"
                        key={panel.name}
                        role="img"
                        style={{ backgroundImage: `url("${getPublicAssetPath(panel.imagePath)}")` }}
                      >
                        <img
                          alt={panel.logoAlt}
                          className="event-info-faction-dress-logo"
                          loading="lazy"
                          src={getPublicAssetPath(panel.logoPath)}
                        />
                        <div>
                          <strong>{panel.name}</strong>
                          <span>{panel.uniform}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.infoRows && (
                  <dl className="event-info-rows">
                    {section.infoRows.map((row) => (
                      <div key={row.label}>
                        <dt>{row.label}</dt>
                        <dd>{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {section.email && <a className="event-info-email" href={`mailto:${section.email}`}>{section.email}</a>}
                {section.note && <p className="event-info-note">{section.note}</p>}
              </article>
            </section>
          );
        })}
        <section className="event-detail-final-cta event-info-final-cta">
          <h2>{eventInfo.ctaTitle}</h2>
          <a className="btn btn-gold" href={getSafeInternalHref(eventInfo.ctaHref)}>
            {eventInfo.ctaLabel}
          </a>
        </section>
      </div>
    </main>
  );
}
