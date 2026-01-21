'use client';

import React, { useRef } from 'react';
import { CarouselSlideData } from '@/types/carousel.types';
import { AutoPlayVideo } from '@/components/video/AutoPlayVideo';
import './CarouselSlide.scss';

interface CarouselSlideProps {
  slide: CarouselSlideData;
  index: number;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ slide, index }) => {
  const slideRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={slideRef}
      className="carousel-slide"
      style={{ backgroundColor: slide.backgroundColor || '#667eea' }}
      data-slide-index={index}
    >
      {slide.videoUrl && (
        <div className="carousel-slide__media">
          <AutoPlayVideo src={slide.videoUrl} />
        </div>
      )}
      
      {slide.imageUrl && !slide.videoUrl && (
        <div className="carousel-slide__media">
          <img 
            src={slide.imageUrl} 
            alt={slide.title}
            className="carousel-slide__image"
          />
        </div>
      )}

      <div className="carousel-slide__content">
        <h2 className="carousel-slide__title">{slide.title}</h2>
        <p className="carousel-slide__description">{slide.description}</p>
      </div>

      <div className="carousel-slide__overlay" />
    </div>
  );
};
