'use client';

import React, { useRef, useState, useEffect } from 'react';
import { CarouselSlideData } from '@/types/carousel.types';
import { useScrollSnap } from '@/hooks/useScrollSnap';
import { CarouselSlide } from './CarouselSlide';
import { CarouselNavigation } from './CarouselNavigation';
import { CarouselProgress } from './CarouselProgress';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PerpendicularCarousel.scss';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface PerpendicularCarouselProps {
  slides: CarouselSlideData[];
  autoPlay?: boolean;
}

export const PerpendicularCarousel: React.FC<PerpendicularCarouselProps> = ({
  slides,
  autoPlay = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentIndex, scrollToIndex } = useScrollSnap(containerRef);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalSlides = slides.length;
    const progressPercentage = ((currentIndex + 1) / totalSlides) * 100;
    setProgress(progressPercentage);
  }, [currentIndex, slides.length]);

  // Initialize GSAP ScrollTrigger for smooth parallax effects
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const slides = containerRef.current?.querySelectorAll('.carousel-slide');
      
      slides?.forEach((slide, index) => {
        const media = slide.querySelector('.carousel-slide__media');
        
        if (media) {
          gsap.to(media, {
            scrollTrigger: {
              trigger: slide,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
              scroller: containerRef.current,
            },
            y: -50,
            ease: 'none',
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [slides]);

  return (
    <>
      <div ref={containerRef} className="perpendicular-carousel">
        {slides.map((slide, index) => (
          <CarouselSlide key={slide.id} slide={slide} index={index} />
        ))}
      </div>

      <CarouselNavigation
        totalSlides={slides.length}
        currentSlide={currentIndex}
        onNavigate={scrollToIndex}
      />

      <CarouselProgress
        progress={progress}
        currentSlide={currentIndex}
        totalSlides={slides.length}
      />
    </>
  );
};
