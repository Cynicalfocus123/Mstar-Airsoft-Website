import { useEffect, useRef } from 'react';
import type { HeroSlide } from '../types/siteContent';

interface BannerSliderProps {
  slides: HeroSlide[];
}

export function BannerSlider({ slides }: BannerSliderProps) {
  const activeSlide = slides[0];
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (activeSlide.videoEmbedUrl) {
      const head = document.head;
      const preconnectHosts = ['https://www.youtube-nocookie.com', 'https://www.youtube.com', 'https://i.ytimg.com'];
      const appendedLinks = preconnectHosts.map((href) => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        link.crossOrigin = 'anonymous';
        head.appendChild(link);
        return link;
      });

      return () => {
        appendedLinks.forEach((link) => head.removeChild(link));
      };
    }

    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    void video.play();
  }, [activeSlide.videoEmbedUrl]);

  function getPublicAssetPath(path: string) {
    return path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;
  }

  return (
    <section className="banner-slider banner-video-hero" aria-label="Featured event">
      <article className="banner-slide banner-slide-active" key={activeSlide.id}>
        {activeSlide.videoEmbedUrl ? (
          <iframe
            src={activeSlide.videoEmbedUrl}
            title={activeSlide.title}
            loading="eager"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : activeSlide.videoPath ? (
          <video
            ref={videoRef}
            src={getPublicAssetPath(activeSlide.videoPath)}
            poster={getPublicAssetPath(activeSlide.imagePath)}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : (
          <img src={getPublicAssetPath(activeSlide.imagePath)} alt="" />
        )}
      </article>
      <div className="banner-overlay">
        <a className="btn btn-gold" href={activeSlide.cta.href}>
          {activeSlide.cta.label}
        </a>
      </div>
    </section>
  );
}
