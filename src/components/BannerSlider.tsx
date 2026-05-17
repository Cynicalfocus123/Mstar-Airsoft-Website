import { useEffect, useRef } from 'react';
import type { HeroSlide } from '../types/siteContent';

interface BannerSliderProps {
  slides: HeroSlide[];
}

export function BannerSlider({ slides }: BannerSliderProps) {
  const activeSlide = slides[0];
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    void video.play();
  }, [activeSlide.videoMp4Path, activeSlide.videoWebmPath]);

  function getPublicAssetPath(path: string) {
    return path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;
  }

  return (
    <section className="banner-slider banner-video-hero" aria-label="Featured event">
      <article className="banner-slide banner-slide-active" key={activeSlide.id}>
        <div
          className="banner-media-poster"
          style={{ backgroundImage: `url(${getPublicAssetPath(activeSlide.posterPath)})` }}
          aria-hidden="true"
        />
        <video
          ref={videoRef}
          className="banner-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={getPublicAssetPath(activeSlide.posterPath)}
        >
          {activeSlide.videoWebmPath && (
            <source src={getPublicAssetPath(activeSlide.videoWebmPath)} type="video/webm" />
          )}
          <source src={getPublicAssetPath(activeSlide.videoMp4Path)} type="video/mp4" />
        </video>
      </article>
      <div className="banner-overlay">
        <a className="btn btn-gold" href={activeSlide.cta.href}>
          {activeSlide.cta.label}
        </a>
      </div>
    </section>
  );
}
