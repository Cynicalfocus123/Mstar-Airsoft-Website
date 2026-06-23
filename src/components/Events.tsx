import type { CSSProperties } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { EventCard, EventCountdownContent } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';
import { getSafeInternalHref } from '../utils/safeUrl';

interface EventsProps {
  events: EventCard[];
  viewAllHref: string;
  countdown: EventCountdownContent;
}

const countdownLabels = ['Days', 'Hours', 'Minutes', 'Seconds'] as const;

function getCountdownParts(targetTime: number) {
  const remaining = Math.max(0, targetTime - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { values: [days, hours, minutes, seconds], isComplete: remaining <= 0 };
}

function EventCountdown({ content }: { content: EventCountdownContent }) {
  const targetTime = useMemo(() => new Date(content.targetIso).getTime(), [content.targetIso]);
  const [countdown, setCountdown] = useState(() => getCountdownParts(targetTime));

  useEffect(() => {
    setCountdown(getCountdownParts(targetTime));
    const intervalId = window.setInterval(() => {
      setCountdown(getCountdownParts(targetTime));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [targetTime]);

  return (
    <div className="event-countdown" aria-live="polite">
      <div className="event-countdown-copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{countdown.isComplete ? content.completeLabel : content.title}</h2>
        <p>{countdown.isComplete ? content.gateLabel : content.description}</p>
      </div>
      <div className="event-countdown-grid" aria-label={content.gateLabel}>
        {countdown.values.map((value, index) => (
          <div className="event-countdown-unit" key={countdownLabels[index]}>
            <strong>{String(value).padStart(2, '0')}</strong>
            <span>{countdownLabels[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Events({ events, viewAllHref, countdown }: EventsProps) {
  const backgroundImage = getPublicAssetPath('/images/home/photo-1666873577061-26f78e7452ce.avif');
  const sectionStyle = backgroundImage
    ? ({ '--game-schedules-background-image': `url("${backgroundImage}")` } as CSSProperties)
    : undefined;

  return (
    <section className="section section-anchor section-rib game-schedules-section" id="events" style={sectionStyle}>
      <EventCountdown content={countdown} />
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
