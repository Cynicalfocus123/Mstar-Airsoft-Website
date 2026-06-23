import type { EventCard } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';
import { getSafeInternalHref } from '../utils/safeUrl';
import type { CSSProperties } from 'react';

interface EventDetailPageProps {
  event?: EventCard;
  isAuthenticated: boolean;
}

export function EventDetailPage({ event, isAuthenticated }: EventDetailPageProps) {
  if (!event) {
    return (
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">Event Not Found</p>
          <h1>Operation Missing</h1>
          <p>This event is not available. Return to the events page to choose another operation.</p>
          <a className="btn btn-gold" href={getSafeInternalHref('/events')}>
            View Events
          </a>
        </section>
      </main>
    );
  }

  const detail = event.detail;
  const heroTitle = detail?.heroTitle ?? event.title;
  const heroDescription = detail?.heroDescription ?? event.summary;
  const heroCtas = detail?.heroCtas ?? [
    { label: isAuthenticated ? 'Join Now' : 'Create Account', href: isAuthenticated ? `/checkout/${event.id}` : '/signup', variant: 'primary' as const },
  ];

  return (
    <main className="event-detail-page">
      <section className="event-detail-hero">
        <img src={getPublicAssetPath(event.imagePath)} alt="" />
        <div className="event-detail-hero-content">
          <p className="eyebrow">{event.status}</p>
          <h1>{heroTitle}</h1>
          <p>{heroDescription}</p>
          <div className="event-detail-hero-meta" aria-label="Event summary">
            <span>JAN 8-10, 2027</span>
            <span>{event.location}</span>
            <span>{event.status}</span>
          </div>
          <div className="event-detail-actions">
            {heroCtas.map((cta) => (
              <a
                className={`btn ${cta.variant === 'primary' ? 'btn-gold' : 'btn-secondary'}`}
                href={getSafeInternalHref(cta.href)}
                key={cta.href}
                onClick={() => {
                  if (cta.href === '/signup') {
                    sessionStorage.setItem('mstarAuthReturnTo', `/checkout/${event.id}`);
                  }
                }}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="event-detail-content">
        <section className="event-detail-section event-detail-overview">
          <div>
            <p className="eyebrow">{detail?.overviewTitle ?? 'Game Overview'}</p>
            <h2>{event.title}</h2>
          </div>
          <p>{event.overview}</p>
        </section>

        <section className="event-detail-split">
          <article className="event-detail-section event-detail-brief">
            <p className="eyebrow">{detail?.missionTitle ?? 'Mission Brief'}</p>
            <h2>Operation Brief</h2>
            <p>{detail?.missionBody ?? event.overview}</p>
          </article>
          <aside className="event-detail-section event-detail-facts">
            <p className="eyebrow">Event Details</p>
            <dl>
              {(detail?.detailRows ?? [
                { label: 'Date', value: event.date },
                { label: 'Location', value: event.location },
                { label: 'Registration', value: event.status },
                { label: 'Entry', value: event.entryFee },
              ]).map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        {detail?.timeline && (
          <section className="event-detail-section event-detail-timeline">
            <div className="event-section-heading">
              <p className="eyebrow">Schedule / Timeline</p>
              <h2>Draft Event Flow</h2>
            </div>
            <div className="event-timeline-grid">
              {detail.timeline.map((item) => (
                <article className="event-timeline-card" key={item.label}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {detail?.requirements && (
          <section className="event-detail-section event-detail-requirements">
            <div className="event-section-heading">
              <p className="eyebrow">Requirements</p>
              <h2>Before You Arrive</h2>
            </div>
            <ul>
              {detail.requirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
          </section>
        )}

        {detail?.missionScenario && (
          <section
            className="mission-scenario-section"
            style={{
              '--mission-scenario-background': `url("${getPublicAssetPath(detail.missionScenario.backgroundImagePath)}")`,
            } as CSSProperties}
          >
            <div className="mission-scenario-content">
              <div className="mission-scenario-intro">
                <p className="eyebrow">{detail.missionScenario.eyebrow}</p>
                <h2>{detail.missionScenario.heading}</h2>
                <strong>{detail.missionScenario.subheading}</strong>
                <p>{detail.missionScenario.intro}</p>
              </div>
              <div className="mission-scenario-days">
                {detail.missionScenario.days.map((day) => (
                  <article className="mission-scenario-day" key={day.label}>
                    <span>{day.label}</span>
                    <h3>{day.title}</h3>
                    <strong>{day.subtitle}</strong>
                    <p>{day.body}</p>
                  </article>
                ))}
              </div>
              <p className="mission-scenario-closing">{detail.missionScenario.closingLine}</p>
            </div>
          </section>
        )}

        {detail?.footerCta && (
          <section className="event-detail-final-cta">
            <h2>{detail.footerTitle}</h2>
            <a className="btn btn-gold" href={getSafeInternalHref(detail.footerCta.href)}>
              {detail.footerCta.label}
            </a>
          </section>
        )}
      </section>
    </main>
  );
}
