import type { EventCard } from '../types/siteContent';

interface EventsProps {
  events: EventCard[];
  viewAllHref: string;
}

export function Events({ events, viewAllHref }: EventsProps) {
  return (
    <section className="section section-anchor section-rib" id="events">
      <div className="section-heading">
        <p className="eyebrow">Upcoming Operations</p>
        <h2>Tournament Schedule</h2>
        <p className="section-intro">
          Select upcoming Mstar Airsoft operations are listed below. Open the full events page for the complete season.
        </p>
        <a className="btn btn-gold section-action" href={viewAllHref}>
          View All Events
        </a>
      </div>
      <div className="card-grid">
        {events.map((event) => (
          <a className="event-card" key={event.id} href={`#/events/${event.id}`}>
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
                <dt>Teams</dt>
                <dd>{event.teams}</dd>
              </div>
              <div>
                <dt>Attendance</dt>
                <dd>Attendance: {event.attendance}</dd>
              </div>
            </dl>
          </a>
        ))}
      </div>
    </section>
  );
}
