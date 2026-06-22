import type { EventCard } from '../types/siteContent';
import { getSafeInternalHref } from '../utils/safeUrl';

interface EventsProps {
  events: EventCard[];
  viewAllHref: string;
}

export function Events({ events, viewAllHref }: EventsProps) {
  return (
    <section className="section section-anchor section-rib" id="events">
      <div className="section-heading">
        <p className="eyebrow">Upcoming Operations</p>
        <h2>Game Schedules</h2>
        <p className="section-intro">
          Select upcoming Mstar Airsoft operations are listed below. Open the full events page for the complete season.
        </p>
        <a className="btn btn-gold section-action" href={getSafeInternalHref(viewAllHref)}>
          View All Events
        </a>
      </div>
      <div className="card-grid">
        {events.map((event) => {
          const cardBody = (
            <>
              <div className="card-topline">
                <span>{event.date}</span>
                <strong>{event.status}</strong>
              </div>
              <h3>{event.title}</h3>
              <dl>
                <div>
                  <dt>Location</dt>
                  <dd>{event.location}</dd>
                </div>
                <div>
                  <dt>Entry fee</dt>
                  <dd>{event.entryFee}</dd>
                </div>
                <div>
                  <dt>Attendance</dt>
                  <dd>{event.attendance}</dd>
                </div>
              </dl>
            </>
          );

          return event.href ? (
            <a className="event-card" key={event.id} href={getSafeInternalHref(event.href)}>
              {cardBody}
            </a>
          ) : (
            <article className="event-card event-card-static" key={event.id}>
              {cardBody}
            </article>
          );
        })}
      </div>
    </section>
  );
}
