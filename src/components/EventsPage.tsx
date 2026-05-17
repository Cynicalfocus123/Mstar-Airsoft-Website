import { useState } from 'react';
import type { EventCard } from '../types/siteContent';

interface EventsPageProps {
  events: EventCard[];
}

export function EventsPage({ events }: EventsPageProps) {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleEvents = events.slice(0, visibleCount);
  const hasMore = visibleCount < events.length;

  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">All Operations</p>
        <h1>Events</h1>
        <p>Browse Mstar Airsoft tournaments, qualifiers, night games, and championship events.</p>
      </section>
      <section className="event-banner-list" aria-label="All events">
        {visibleEvents.map((event) => (
          <a className="event-banner-card" key={event.id} href={`#/events/${event.id}`} aria-label={`Open ${event.title}`}>
            <img src={event.imagePath} alt="" loading="lazy" />
            <div className="event-banner-content">
              <span>{event.date}</span>
              <h2>{event.title}</h2>
              <p>{event.summary}</p>
              <dl>
                <div>
                  <dt>Location</dt>
                  <dd>{event.location}</dd>
                </div>
                <div>
                  <dt>Entry</dt>
                  <dd>{event.entryFee}</dd>
                </div>
                <div>
                  <dt>Teams</dt>
                  <dd>{event.teams}</dd>
                </div>
                <div>
                  <dt>Attendance</dt>
                  <dd>Attendance: {event.attendance}</dd>
                </div>
              </dl>
              <strong>{event.status}</strong>
            </div>
          </a>
        ))}
      </section>
      {hasMore && (
        <button className="btn btn-gold load-more" type="button" onClick={() => setVisibleCount((count) => count + 3)}>
          Load More
        </button>
      )}
    </main>
  );
}
