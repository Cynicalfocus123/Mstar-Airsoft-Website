import type { CSSProperties } from 'react';
import type { HeroContent } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';
import { getSafeYouTubeEmbedUrl } from '../utils/safeUrl';

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  const backgroundImage = getPublicAssetPath('/images/home/photo-1661339051428-1af0c377a793.avif');
  const sectionStyle = backgroundImage
    ? ({ '--hero-video-background-image': `url("${backgroundImage}")` } as CSSProperties)
    : undefined;

  return (
    <section className="hero hero-embed-section section-anchor" id="home" style={sectionStyle}>
      <div className="hero-video-grid">
        {content.videos.map((video) => {
          const embedUrl = getSafeYouTubeEmbedUrl(video.embedUrl);
          if (!embedUrl) return null;

          return (
            <article className="hero-video-card" key={video.language}>
              <header className="hero-video-card-header">
                <p>{video.language}</p>
              </header>
              <div className="hero-video-section">
                <iframe
                  className="hero-video-frame"
                  src={embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
