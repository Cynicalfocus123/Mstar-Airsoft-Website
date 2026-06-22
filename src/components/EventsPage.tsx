import type { EventCard } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';
import { getSafeInternalHref } from '../utils/safeUrl';

interface EventsPageProps {
  events: EventCard[];
}

export function EventsPage({ events }: EventsPageProps) {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">All Operations</p>
        <h1>Events</h1>
        <p>Browse Mstar Airsoft tournaments, qualifiers, night games, and championship events.</p>
      </section>
      <section className="event-banner-list" aria-label="All events">
        {events.map((event) => {
          const cardClassName = `event-banner-card ${event.id === 'urban-rush' ? 'event-banner-card-force-of-conquest' : ''}`;
          const cardBody = (
            <>
              <div className="event-card-image">
                <img src={getPublicAssetPath(event.imagePath)} alt="" loading="lazy" />
                <strong>{event.status}</strong>
              </div>
              <div className="event-banner-content">
                <h2>{event.title}</h2>
                {event.summary && <p>{event.summary}</p>}
                <dl>
                  <div>
                    <dt>Date</dt>
                    <dd>{event.date}</dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>{event.location}</dd>
                  </div>
                  <div>
                    <dt>Entry</dt>
                    <dd>{event.entryFee}</dd>
                  </div>
                  <div>
                    <dt>Attendance</dt>
                    <dd>{event.attendance}</dd>
                  </div>
                </dl>
              </div>
            </>
          );

          return event.href ? (
            <a
              className={cardClassName}
              key={event.id}
              href={getSafeInternalHref(event.href)}
              aria-label={`Get tickets for ${event.title}`}
            >
              {cardBody}
            </a>
          ) : (
            <article className={`${cardClassName} event-banner-card-static`} key={event.id}>
              {cardBody}
            </article>
          );
        })}
      </section>
    </main>
  );
}
