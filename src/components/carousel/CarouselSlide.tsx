'use client';

import React, { useRef, useEffect } from 'react';
import { CarouselSlideData } from '@/types/carousel.types';
import { AutoPlayVideo } from '@/components/video/AutoPlayVideo';
import { HorizontalCarousel } from './HorizontalCarousel';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { gsap } from 'gsap';
import './CarouselSlide.scss';

interface CarouselSlideProps {
  slide: CarouselSlideData;
  index: number;
  currentSlide: number;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ slide, index, currentSlide }) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(slideRef, { threshold: 0.3 });

  useEffect(() => {
    if (slide.isStaticPage || !contentRef.current || !mediaRef.current) return;

    if (isVisible) {
      // Animate content in
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });

      // Animate media in with scale
      gsap.to(mediaRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
      });
    } else {
      // Reset animations when not visible
      gsap.set(contentRef.current, { opacity: 0, y: 30 });
      gsap.set(mediaRef.current, { opacity: 0.7, scale: 1.05 });
    }
  }, [isVisible, slide.isStaticPage]);

  // Static page slide (like horizontal carousel)
  if (slide.isStaticPage) {
    return (
      <div 
        ref={slideRef}
        className="carousel-slide carousel-slide--static"
        style={{ backgroundColor: slide.backgroundColor || '#ffffff' }}
        data-slide-index={index}
      >
        <HorizontalCarousel />
      </div>
    );
  }

  return (
    <div 
      ref={slideRef}
      className="carousel-slide"
      style={{ backgroundColor: slide.backgroundColor || '#000000' }}
      data-slide-index={index}
    >
      <div ref={mediaRef} className="carousel-slide__media">
        {slide.videoUrl && (
          <AutoPlayVideo src={slide.videoUrl} isCurrentSlide={index === currentSlide}  index={index} />
        )}
        
        {slide.imageUrl && !slide.videoUrl && (
          <img 
            src={slide.imageUrl} 
            alt={slide.title}
            className="carousel-slide__image"
            loading="lazy"
          />
        )}
      </div>

      <div ref={contentRef} className="carousel-slide__content">
        <h2 className="carousel-slide__title">{slide.title}</h2>
        <p className="carousel-slide__description">{slide.description}</p>
      </div>

      <div className="carousel-slide__overlay" />
    </div>
  );
};
