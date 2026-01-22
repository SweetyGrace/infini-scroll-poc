'use client';

import React from 'react';
import { CarouselNavigationProps } from '@/types/carousel.types';
import './CarouselNavigation.scss';

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  totalSlides,
  currentSlide,
  onNavigate,
}) => {
  return (
    <div className="carousel-navigation">
      <div className="carousel-navigation__dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`carousel-navigation__dot ${
              index === currentSlide ? 'carousel-navigation__dot--active' : ''
            } ${currentSlide === 0 ? 'carousel-navigation__dot--dark' : ''}`}
            onClick={() => onNavigate(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* <div className="carousel-navigation__arrows">
        <button
          className="carousel-navigation__arrow carousel-navigation__arrow--prev"
          onClick={() => onNavigate(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="carousel-navigation__arrow carousel-navigation__arrow--next"
          onClick={() => onNavigate(Math.min(totalSlides - 1, currentSlide + 1))}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div> */}
    </div>
  );
};
