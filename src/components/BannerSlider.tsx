import { useEffect, useRef, useState } from 'react';
import type { HeroSlide } from '../types/siteContent';

interface BannerSliderProps {
  slides: HeroSlide[];
}

export function BannerSlider({ slides }: BannerSliderProps) {
  const activeSlide = slides[0];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setVideoReady(false);
    video.load();
    video.currentTime = 0;
    void video.play();
  }, [activeSlide.videoMp4Path, activeSlide.videoWebmPath, activeSlide.mobileVideoMp4Path]);

  function getPublicAssetPath(path: string) {
    return path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;
  }

  const posterUrl = getPublicAssetPath(activeSlide.posterPath);
  const desktopVideoUrl = getPublicAssetPath(activeSlide.videoMp4Path);
  const mobileVideoUrl = activeSlide.mobileVideoMp4Path
    ? getPublicAssetPath(activeSlide.mobileVideoMp4Path)
    : undefined;

  return (
    <section className="banner-slider banner-video-hero" aria-label="Featured event">
      <article className="banner-slide banner-slide-active" key={activeSlide.id}>
        <div className="hero-video-wrap">
          <img
            src={posterUrl}
            alt=""
            className={`hero-poster ${videoReady ? 'is-hidden' : ''}`}
            loading="eager"
            fetchPriority="high"
          />
          <video
            ref={videoRef}
            className="hero-video banner-background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={posterUrl}
            onCanPlay={() => setVideoReady(true)}
            onPlaying={() => setVideoReady(true)}
          >
            {activeSlide.videoWebmPath && !mobileVideoUrl && (
              <source src={getPublicAssetPath(activeSlide.videoWebmPath)} type="video/webm" />
            )}
            {mobileVideoUrl && <source src={mobileVideoUrl} media="(max-width: 640px)" type="video/mp4" />}
            <source src={desktopVideoUrl} type="video/mp4" />
          </video>
        </div>
      </article>
      <div className="banner-overlay">
        <a className="btn btn-gold" href={activeSlide.cta.href}>
          {activeSlide.cta.label}
        </a>
      </div>
    </section>
  );
}
