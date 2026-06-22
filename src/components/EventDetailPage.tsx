import type { EventCard } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';
import { getSafeInternalHref } from '../utils/safeUrl';

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

  return (
    <main className="event-detail-page">
      <section className="event-detail-hero">
        <img src={getPublicAssetPath(event.imagePath)} alt="" />
      </section>
      <section className="event-detail-layout">
        <article className="event-detail-main">
          <p className="eyebrow">{event.status}</p>
          <h1>{event.title}</h1>
          <div className="event-meta-strip">
            <span>{event.location}</span>
            <span>{event.date}</span>
            <span>{event.time}</span>
          </div>
          <h2>Game Overview</h2>
          <p>{event.overview}</p>
        </article>
        <aside className="event-detail-sidebar">
          <a
            className="btn btn-gold join-now-button"
            href={getSafeInternalHref(isAuthenticated ? `/checkout/${event.id}` : '/signup')}
            onClick={() => {
              if (!isAuthenticated) {
                sessionStorage.setItem('mstarAuthReturnTo', `/checkout/${event.id}`);
              }
            }}
          >
            Join Now
          </a>
          <dl>
            <div>
              <dt>Entry fee</dt>
              <dd>{event.entryFee}</dd>
            </div>
            <div>
              <dt>Attendance</dt>
              <dd>{event.attendance}</dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  );
}
