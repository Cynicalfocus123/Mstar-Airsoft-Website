import type { CSSProperties } from 'react';
import type { AboutContent } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';

interface AboutProps {
  content: AboutContent;
}

export function About({ content }: AboutProps) {
  const backgroundImagePath = getPublicAssetPath(content.backgroundImagePath);
  const mobileBackgroundImagePath = getPublicAssetPath(content.mobileBackgroundImagePath ?? content.backgroundImagePath);
  const backgroundStyle = {
    '--about-background-image': backgroundImagePath ? `url(${backgroundImagePath})` : undefined,
    '--about-mobile-background-image': mobileBackgroundImagePath ? `url(${mobileBackgroundImagePath})` : undefined,
  } as CSSProperties;

  return (
    <section
      className="section section-anchor about-section"
      id="about"
      style={backgroundStyle}
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
