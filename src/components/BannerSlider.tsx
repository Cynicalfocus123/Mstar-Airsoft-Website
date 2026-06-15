import { useEffect, useRef, useState } from 'react';
import type { HeroSlide } from '../types/siteContent';
import { getSafeInternalPath, getSafeLocalAssetPath, getSafeVideoUrl } from '../utils/safeUrl';

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

  const posterUrl = getSafeLocalAssetPath('/images/home-hero-poster.webp');
  const desktopVideoUrl = getSafeVideoUrl(activeSlide.videoMp4Path);
  const mobileVideoUrl = activeSlide.mobileVideoMp4Path
    ? getSafeVideoUrl(activeSlide.mobileVideoMp4Path)
    : undefined;

  return (
    <section className="banner-slider banner-video-hero" aria-label="Featured event">
      <article className="banner-slide banner-slide-active" key={activeSlide.id}>
        <div className="hero-video-wrap">
          <img
            src={posterUrl}
            alt=""
            className={`hero-fallback-image ${videoReady ? 'is-hidden' : ''}`}
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
            preload="metadata"
            poster={posterUrl}
            onCanPlay={() => setVideoReady(true)}
            onPlaying={() => setVideoReady(true)}
            onWaiting={() => setVideoReady(false)}
            onStalled={() => setVideoReady(false)}
            onError={() => setVideoReady(false)}
          >
            {activeSlide.videoWebmPath && !mobileVideoUrl && (
              <source src={getSafeVideoUrl(activeSlide.videoWebmPath)} type="video/webm" />
            )}
            {mobileVideoUrl && <source src={mobileVideoUrl} media="(max-width: 640px)" type="video/mp4" />}
            <source src={desktopVideoUrl} type="video/mp4" />
          </video>
        </div>
      </article>
      <div className="banner-overlay">
        <a className="btn btn-gold" href={getSafeInternalPath(activeSlide.cta.href)}>
          {activeSlide.cta.label}
        </a>
      </div>
    </section>
  );
}
