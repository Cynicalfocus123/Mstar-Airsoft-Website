import { useState } from 'react';
import type { EventCard } from '../types/siteContent';
import { getSafeInternalHref } from '../utils/safeUrl';

interface MissionScenarioPageProps {
  event?: EventCard;
}

export function MissionScenarioPage({ event }: MissionScenarioPageProps) {
  const scenario = event?.detail?.missionScenario;
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'th'>(scenario?.defaultLanguage ?? 'en');
  const activeScenario =
    scenario?.languages.find((language) => language.code === activeLanguage) ??
    scenario?.languages.find((language) => language.code === scenario.defaultLanguage) ??
    scenario?.languages[0];

  if (!event || !scenario || !activeScenario) {
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
    <main className={`mission-page mission-page-${activeScenario.code}`} lang={activeScenario.htmlLang}>
      <section className="mission-page-hero">
        <p className="eyebrow">{scenario.eyebrow}</p>
        <h1>{activeScenario.heading}</h1>
        <strong>{activeScenario.subheading}</strong>
        <p>{activeScenario.dateLocation}</p>
        <div className="mission-language-toggle" aria-label="Mission Scenario language">
          {scenario.languages.map((language) => (
            <button
              aria-pressed={activeScenario.code === language.code}
              className={activeScenario.code === language.code ? 'is-active' : ''}
              key={language.code}
              onClick={() => setActiveLanguage(language.code)}
              type="button"
            >
              {language.label}
            </button>
          ))}
        </div>
        <a className="btn btn-secondary" href={getSafeInternalHref(event.href ?? '/events/force-of-conquest')}>
          Back to Event
        </a>
      </section>

      <section className="mission-page-content">
        <section className="mission-story-intro">
          <h2>{activeScenario.backgroundHeading}</h2>
          {activeScenario.backgroundParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        {activeScenario.days.map((day) => (
          <section className="mission-day-section" key={day.label}>
            <div className="mission-day-heading mission-day-heading-operation">
              <span>{day.label}</span>
              <div>
                <h2>{day.title}</h2>
                <strong>{day.subtitle}</strong>
              </div>
            </div>

            <div className="mission-story-block">
              <p className="mission-core-line">{day.intro}</p>
              {day.bodyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mission-story-block">
              <h3>{activeScenario.scheduleHeading}</h3>
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
                {day.extraIntro && <p>{day.extraIntro}</p>}
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
                {day.victoryIntro && <p>{day.victoryIntro}</p>}
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
            <span>{activeScenario.nightFestival.label}</span>
            <div>
              <h2>{activeScenario.nightFestival.title}</h2>
              <strong>{activeScenario.nightFestival.intro}</strong>
            </div>
          </div>
          <div className="mission-festival-grid">
            {activeScenario.nightFestival.groups.map((group) => (
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
          <h2>{activeScenario.closingLine}</h2>
          {activeScenario.closingParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="mission-closing-calls">
            {activeScenario.closingCalls.map((line) => (
              <strong key={line}>{line}</strong>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
