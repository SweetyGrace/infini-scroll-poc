'use client';

import React, { useRef, useState, useEffect } from 'react';
import { CarouselSlideData } from '@/types/carousel.types';
import { useScrollSnap } from '@/hooks/useScrollSnap';
import { CarouselSlide } from './CarouselSlide';
import { CarouselNavigation } from './CarouselNavigation';
import { CarouselProgress } from './CarouselProgress';
import './PerpendicularCarousel.scss';

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
