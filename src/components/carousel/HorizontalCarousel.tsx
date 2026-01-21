'use client';

import React, { useState } from 'react';
import './HorizontalCarousel.scss';

interface HorizontalItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const items: HorizontalItem[] = [
  {
    id: '1',
    title: 'Recently viewed watches',
    subtitle: 'WELCOME BACK',
    imageUrl: '/images/watch.avif',
  },
  {
    id: '2',
    title: 'The Datejust book',
    subtitle: 'A WATCH THAT MADE HISTORY',
    imageUrl: '/images/homepage-welcome-datejust-book-push_rolex_datejust_hero_v2.avif',
  },
];

export const HorizontalCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="horizontal-carousel">
      <div className="horizontal-carousel__track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={item.id} className="horizontal-carousel__slide">
            <div className="horizontal-carousel__content">
              <div className="horizontal-carousel__text">
                <p className="horizontal-carousel__subtitle">{item.subtitle}</p>
                <h2 className="horizontal-carousel__title">{item.title}</h2>
                <div className="horizontal-carousel__links">
                  <a href="#" className="horizontal-carousel__link">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" fill="currentColor"/>
                    </svg>
                    Order on WallpaperSTORE*
                  </a>
                  <a href="#" className="horizontal-carousel__link">
                    Also available at Official Rolex Retailers
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="horizontal-carousel__image-container">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="horizontal-carousel__image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== 0 && (
        <button 
          className="horizontal-carousel__nav horizontal-carousel__nav--prev" 
          onClick={goToPrevious}
          aria-label="Previous"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      )}

      {currentIndex !== items.length - 1 && (
        <button 
          className="horizontal-carousel__nav horizontal-carousel__nav--next" 
          onClick={goToNext}
          aria-label="Next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      )}

      <div className="horizontal-carousel__indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`horizontal-carousel__indicator ${
              index === currentIndex ? 'horizontal-carousel__indicator--active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
