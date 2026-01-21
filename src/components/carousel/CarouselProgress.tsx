'use client';

import React from 'react';
import { CarouselProgressProps } from '@/types/carousel.types';
import './CarouselProgress.scss';

export const CarouselProgress: React.FC<CarouselProgressProps> = ({
  progress,
  currentSlide,
  totalSlides,
}) => {
  return (
    <div className="carousel-progress">
      <div className="carousel-progress__bar">
        <div 
          className="carousel-progress__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="carousel-progress__counter">
        <span className="carousel-progress__current">{currentSlide + 1}</span>
        <span className="carousel-progress__separator">/</span>
        <span className="carousel-progress__total">{totalSlides}</span>
      </div>
    </div>
  );
};
