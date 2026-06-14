import type { EventCard } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';

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
        {events.map((event) => (
          <a className="event-banner-card" key={event.id} href={`#/events/${event.id}`} aria-label={`Open ${event.title}`}>
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
          </a>
        ))}
      </section>
    </main>
  );
}
