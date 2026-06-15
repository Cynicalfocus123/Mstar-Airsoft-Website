import type { HeroContent } from '../types/siteContent';
import { getSafeYouTubeEmbedUrl } from '../utils/safeUrl';

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero hero-embed-section section-anchor" id="home">
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
