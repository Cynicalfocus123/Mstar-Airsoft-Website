import type { EventCard } from '../types/siteContent';

interface EventsProps {
  events: EventCard[];
}

export function Events({ events }: EventsProps) {
  return (
    <section className="section section-anchor section-rib" id="events">
      <div className="section-heading">
        <p className="eyebrow">Upcoming Operations</p>
        <h2>Tournament Schedule</h2>
      </div>
      <div className="card-grid">
        {events.map((event) => (
          <article className="event-card" key={event.id}>
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
                <dt>Team size</dt>
                <dd>{event.teamSize}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
