import type { AboutContent } from '../types/siteContent';

interface AboutProps {
  content: AboutContent;
}

export function About({ content }: AboutProps) {
  return (
    <section
      className="section section-anchor about-section"
      id="about"
      style={content.backgroundImagePath ? { backgroundImage: `url(${content.backgroundImagePath})` } : undefined}
    >
      <div className="about-section-inner">
        <div className="section-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
        </div>
        <div className="about-grid">
          <p>{content.body}</p>
          <ul className="check-list">
            {content.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
