import { useState } from 'react';
import type { HeroSlide } from '../types/siteContent';

interface BannerSliderProps {
  slides: HeroSlide[];
}

export function BannerSlider({ slides }: BannerSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  function goToSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
  }

  return (
    <section className="banner-slider" aria-label="Featured events">
      {slides.map((slide, index) => (
        <article
          className={index === activeIndex ? 'banner-slide banner-slide-active' : 'banner-slide'}
          key={slide.id}
          aria-hidden={index !== activeIndex}
        >
          <img src={slide.imagePath} alt="" />
        </article>
      ))}
      <div className="banner-overlay">
        <p className="eyebrow">{activeSlide.eyebrow}</p>
        <h1>{activeSlide.title}</h1>
        <p>{activeSlide.body}</p>
        <a className="btn btn-gold" href={activeSlide.cta.href}>
          {activeSlide.cta.label}
        </a>
      </div>
      <button className="slider-arrow slider-arrow-left" type="button" onClick={() => goToSlide(activeIndex - 1)} aria-label="Previous slide">
        ‹
      </button>
      <button className="slider-arrow slider-arrow-right" type="button" onClick={() => goToSlide(activeIndex + 1)} aria-label="Next slide">
        ›
      </button>
      <div className="slide-dots" aria-label="Slide navigation">
        {slides.map((slide, index) => (
          <button
            className={index === activeIndex ? 'slide-dot slide-dot-active' : 'slide-dot'}
            key={slide.id}
            type="button"
            aria-label={`Show ${slide.title}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
