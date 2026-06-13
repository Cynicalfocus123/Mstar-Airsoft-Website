import { useState } from 'react';
import type { HeroContent } from '../types/siteContent';

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="hero hero-embed-section section-anchor" id="home">
      <div className="hero-video-grid">
        {content.videos.map((video) => {
          const embedUrl = new URL(video.embedUrl);
          embedUrl.searchParams.set('playsinline', '1');
          embedUrl.searchParams.set('rel', '0');
          embedUrl.searchParams.set('modestbranding', '1');
          const isActive = activeVideo === video.embedUrl;

          if (isActive) {
            embedUrl.searchParams.set('autoplay', '1');
          }

          return (
            <article className="hero-video-card" key={video.language}>
              <header className="hero-video-card-header">
                <p>{video.language}</p>
              </header>
              <div className={`hero-video-section${isActive ? ' is-active' : ''}`}>
                <iframe
                  className="hero-video-frame"
                  src={embedUrl.toString()}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
                {!isActive && (
                  <button
                    className="hero-video-play"
                    type="button"
                    aria-label={`Play ${video.language} video`}
                    onClick={() => setActiveVideo(video.embedUrl)}
                  >
                    <span aria-hidden="true" />
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
