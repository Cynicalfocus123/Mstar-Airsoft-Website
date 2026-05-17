import type { HeroContent } from '../types/siteContent';

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero section-anchor" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{content.kicker}</p>
          <h1>{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
          <div className="button-row">
            {content.buttons.map((button) => (
              <a key={button.href} className={`btn btn-${button.variant}`} href={button.href}>
                {button.label}
              </a>
            ))}
          </div>
        </div>
        <div className="ops-panel" aria-label="Event highlights">
          <span className="panel-label">Mission Board</span>
          {content.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
