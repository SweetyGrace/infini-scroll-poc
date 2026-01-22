'use client';

import React, { useRef, useEffect } from 'react';
import { Header } from '@/components/header/Header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TeachingSlide.scss';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TeachingSlide() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;

    const image = imageRef.current;
    const hero = heroRef.current;
    let currentScale = 1.0;
    let transformOrigin = 'center center';

    // Initial zoom animation on page load
    gsap.fromTo(
      image,
      { scale: 1.0 },
      { scale: 2.0, duration: 3.0, ease: 'power2.out', delay: 0.8, onComplete: () => {
        currentScale = 1.3;
      }}
    );

    // Track mouse movement to set transform origin
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      transformOrigin = `${x}% ${y}%`;
      image.style.transformOrigin = transformOrigin;
    };

    // Wheel event for zoom control (trackpad scrolling)
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // deltaY > 0 means scrolling down, deltaY < 0 means scrolling up
      if (e.deltaY > 0) {
        // Scrolling down - zoom out
        currentScale = Math.max(1.0, currentScale - 0.05);
      } else if (e.deltaY < 0) {
        // Scrolling up - zoom in
        currentScale = Math.min(3.0, currentScale + 0.05);
      }
      
      gsap.to(image, {
        scale: currentScale,
        duration: 0.2,
        ease: 'power2.out'
      });
    };

    // Add event listeners
    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('wheel', handleWheel, { passive: false });

    // Cleanup
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('wheel', handleWheel);
      gsap.killTweensOf(image);
    };
  }, []);

  return (
    <>
      <Header isVisible={true} />
      <div ref={heroRef} className="teaching-slide">
        <div className="teaching-slide__image-container">
          <img
            ref={imageRef}
            src="/images/mahatria-slide-four.jpg" 
            alt="Teaching"
            className="teaching-slide__image"
          />
        </div>
        {/* <div className="teaching-slide__content">
          <h1 className="teaching-slide__title">Teachings</h1>
          <p className="teaching-slide__description">Wisdom and guidance for life</p>
        </div> */}
        <div className="teaching-slide__overlay" />
      </div>
    </>
  );
}
