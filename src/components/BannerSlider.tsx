import { useEffect, useRef, useState } from 'react';
import type { HeroSlide } from '../types/siteContent';

interface BannerSliderProps {
  slides: HeroSlide[];
}

export function BannerSlider({ slides }: BannerSliderProps) {
  const activeSlide = slides[0];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMobileHero, setIsMobileHero] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches,
  );

  useEffect(() => {
    if (!activeSlide.mobileVideoMp4Path) return;

    const mediaQuery = window.matchMedia('(max-width: 640px)');

    function syncMobileSource() {
      setIsMobileHero(mediaQuery.matches);
    }

    syncMobileSource();
    mediaQuery.addEventListener('change', syncMobileSource);
    return () => mediaQuery.removeEventListener('change', syncMobileSource);
  }, [activeSlide.mobileVideoMp4Path]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    video.currentTime = 0;
    void video.play();
  }, [activeSlide.videoMp4Path, activeSlide.videoWebmPath, activeSlide.mobileVideoMp4Path, isMobileHero]);

  function getPublicAssetPath(path: string) {
    return path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;
  }

  const activeVideoPath = isMobileHero && activeSlide.mobileVideoMp4Path
    ? activeSlide.mobileVideoMp4Path
    : activeSlide.videoMp4Path;

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
          {!isMobileHero && activeSlide.videoWebmPath && (
            <source src={getPublicAssetPath(activeSlide.videoWebmPath)} type="video/webm" />
          )}
          <source src={getPublicAssetPath(activeVideoPath)} type="video/mp4" />
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
