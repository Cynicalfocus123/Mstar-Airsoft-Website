import type { HeroContent } from '../types/siteContent';

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  const embedUrl = new URL(content.videoEmbedUrl);
  embedUrl.searchParams.set('playsinline', '1');
  embedUrl.searchParams.set('rel', '0');

  return (
    <section className="hero hero-embed-section section-anchor" id="home">
      <div className="hero-video-section">
        <iframe
          className="hero-video-frame"
          src={embedUrl.toString()}
          title={content.videoEmbedTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}
