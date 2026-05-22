import { useEffect, useRef, useState } from 'react';
import type { HeroSlide } from '../types/siteContent';

interface BannerSliderProps {
  slides: HeroSlide[];
}

export function BannerSlider({ slides }: BannerSliderProps) {
  const activeSlide = slides[0];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const hasEmbedVideo = Boolean(activeSlide.videoEmbedUrl);

  useEffect(() => {
    if (hasEmbedVideo) return;

    const video = videoRef.current;
    if (!video) return;

    setVideoReady(false);
    video.load();
    video.currentTime = 0;
    void video.play();
  }, [activeSlide.videoMp4Path, activeSlide.videoWebmPath, activeSlide.mobileVideoMp4Path, hasEmbedVideo]);

  function getPublicAssetPath(path: string) {
    return path.startsWith('/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;
  }

  function getEmbedUrl(url: string) {
    const embedUrl = new URL(url);
    embedUrl.searchParams.set('playsinline', '1');
    embedUrl.searchParams.set('rel', '0');
    embedUrl.searchParams.set('modestbranding', '1');
    return embedUrl.toString();
  }

  const posterUrl = `${import.meta.env.BASE_URL}images/home-hero-poster.webp`;
  const desktopVideoUrl = getPublicAssetPath(activeSlide.videoMp4Path);
  const mobileVideoUrl = activeSlide.mobileVideoMp4Path
    ? getPublicAssetPath(activeSlide.mobileVideoMp4Path)
    : undefined;

  return (
    <section
      className={`banner-slider banner-video-hero ${hasEmbedVideo ? 'banner-has-embed' : ''}`}
      aria-label="Featured event"
    >
      <article className="banner-slide banner-slide-active" key={activeSlide.id}>
        <div className="hero-video-wrap">
          {hasEmbedVideo ? (
            <div className="hero-embed-shell">
              <iframe
                className="hero-embed-frame"
                src={getEmbedUrl(activeSlide.videoEmbedUrl!)}
                title={activeSlide.videoEmbedTitle ?? activeSlide.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="eager"
              />
            </div>
          ) : (
            <>
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
                preload="auto"
                poster={posterUrl}
                onCanPlay={() => setVideoReady(true)}
                onPlaying={() => setVideoReady(true)}
                onWaiting={() => setVideoReady(false)}
                onStalled={() => setVideoReady(false)}
                onError={() => setVideoReady(false)}
              >
                {activeSlide.videoWebmPath && !mobileVideoUrl && (
                  <source src={getPublicAssetPath(activeSlide.videoWebmPath)} type="video/webm" />
                )}
                {mobileVideoUrl && <source src={mobileVideoUrl} media="(max-width: 640px)" type="video/mp4" />}
                <source src={desktopVideoUrl} type="video/mp4" />
              </video>
            </>
          )}
        </div>
      </article>
      <div className={`banner-overlay ${hasEmbedVideo ? 'banner-overlay-static' : ''}`}>
        <a className="btn btn-gold" href={activeSlide.cta.href}>
          {activeSlide.cta.label}
        </a>
      </div>
    </section>
  );
}
