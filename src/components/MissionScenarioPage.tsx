import type { EventCard } from '../types/siteContent';
import { getSafeInternalHref } from '../utils/safeUrl';

interface MissionScenarioPageProps {
  event?: EventCard;
}

export function MissionScenarioPage({ event }: MissionScenarioPageProps) {
  const scenario = event?.detail?.missionScenario;

  if (!event || !scenario) {
    return (
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">Mission Scenario Missing</p>
          <h1>Scenario Not Available</h1>
          <p>This campaign storyline is not available. Return to the Force of Conquest event page.</p>
          <a className="btn btn-gold" href={getSafeInternalHref('/events/force-of-conquest')}>
            Back to Event
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="mission-page">
      <section className="mission-page-hero">
        <p className="eyebrow">{scenario.eyebrow}</p>
        <h1>{scenario.heading}</h1>
        <strong>{scenario.subheading} Three-Day Campaign Storyline</strong>
        <p>January 8-10, 2027 - Saraburi, Thailand</p>
        <a className="btn btn-secondary" href={getSafeInternalHref(event.href ?? '/events/force-of-conquest')}>
          Back to Event
        </a>
      </section>

      <section className="mission-page-content">
        <section className="mission-story-intro">
          <h2>Force of Conquest 2027</h2>
          <p>{scenario.intro}</p>
          <p className="mission-core-line">{scenario.coreLine}</p>
        </section>

        {scenario.days.map((day) => (
          <section className="mission-day-section" key={day.label}>
            <div className="mission-day-heading mission-day-heading-operation">
              <span>{day.label}</span>
              <div>
                <h2>{day.title}</h2>
                <strong>{day.subtitle}</strong>
              </div>
            </div>

            <div className="mission-story-block">
              <h3>Short Overview</h3>
              <p>{day.body}</p>
            </div>

            <div className="mission-story-block">
              <h3>Mission Schedule</h3>
              <div className="mission-schedule-list">
                {day.schedule.map((item) => (
                  <div className="mission-schedule-row" key={`${day.label}-${item.time}`}>
                    <span>{item.time}</span>
                    <p>{item.mission}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mission-story-block">
              <h3>{day.objectivesTitle}</h3>
              <ul className="mission-check-list">
                {day.objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </div>

            {day.extraTitle && day.extraItems && (
              <div className="mission-story-block">
                <h3>{day.extraTitle}</h3>
                <ul className="mission-check-list">
                  {day.extraItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {day.victoryTitle && day.victoryItems && (
              <div className="mission-story-block">
                <h3>{day.victoryTitle}</h3>
                <ul className="mission-check-list">
                  {day.victoryItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {day.endGameTitle && day.endGameParagraphs && (
              <div className="mission-story-block">
                <h3>{day.endGameTitle}</h3>
                {day.endGameParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
          </section>
        ))}

        <section className="mission-day-section">
          <div className="mission-day-heading mission-day-heading-support">
            <span>Night</span>
            <div>
              <h2>{scenario.nightFestival.title}</h2>
              <strong>{scenario.nightFestival.intro}</strong>
            </div>
          </div>
          <div className="mission-festival-grid">
            {scenario.nightFestival.groups.map((group) => (
              <article className="mission-festival-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mission-closing-section">
          <h2>{scenario.closingLine}</h2>
          {scenario.closingParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      </section>
    </main>
  );
}
