'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import './InfinitheismSlide.scss';

export const InfinitheismSlide: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const ismRef = useRef<HTMLDivElement>(null);
  const theismRef = useRef<HTMLDivElement>(null);
  const infinitheismRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isVisible = useIntersectionObserver(containerRef, { threshold: 0.3 });

  const startAnimation = () => {
    // Kill existing timeline if any
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Reset current section
    setCurrentSection(0);

    // Start with all hidden
    gsap.set([ismRef.current, theismRef.current, infinitheismRef.current], {
      opacity: 0,
      x: 100,
      scale: 1
    });

    // Create new timeline
    const timeline = gsap.timeline({
      defaults: { ease: 'power2.inOut' }
    });

    // Animate sequence
    timeline
      // 1. Show ism
      .to(ismRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        onStart: () => setCurrentSection(1)
      })
      .to({}, { duration: 0.8 }) // Pause
      
      // 2. Show theism
      .to(theismRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        onStart: () => setCurrentSection(2)
      })
      .to({}, { duration: 0.8 }) // Pause
      
      // 3. Show infinitheism
      .to(infinitheismRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        onStart: () => setCurrentSection(3)
      })
      .to({}, { duration: 0.8 }) // Pause
      
      // 4. All sections remain visible together at full size
      .set({}, {
        onStart: () => setCurrentSection(4)
      });

    timelineRef.current = timeline;
  };

  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [isVisible]);

  return (
    <div className="infinitheism-slide" ref={containerRef}>
      <div className="infinitheism-slide__header">
        <img 
          src="/images/what-is-infinitheism.svg" 
          alt="What is infinitheism" 
          className="infinitheism-slide__title-img"
          loading="eager"
          // fetchpriority="high"
        />
        <img 
          src="/images/line.svg" 
          alt="" 
          className="infinitheism-slide__line"
          loading="eager"
        />
      </div>

      <div className="infinitheism-slide__sections">
        {/* ISM Section */}
        <div 
          ref={ismRef}
          className={`infinitheism-slide__section ${currentSection === 1 ? 'active' : ''} ${currentSection === 4 ? 'compact' : ''}`}
        >
          <div className="infinitheism-slide__section-logo">
            <img src="/images/ism.svg" alt="ism" />
          </div>
          <div className="infinitheism-slide__section-content">
            <p>A group of people sharing one common belief is &apos;ism&apos;. For example, a group of people who believe in Buddha&apos;s teachings are said to be followers of Buddh-ism.</p>
            <p>A group of people who believe growth is possible only in the materialistic realm are said to be on the path of material-ism.</p>
          </div>
        </div>

        {/* THEISM Section */}
        <div 
          ref={theismRef}
          className={`infinitheism-slide__section ${currentSection === 2 ? 'active' : ''} ${currentSection === 4 ? 'compact' : ''}`}
        >
          <div className="infinitheism-slide__section-logo">
            <img src="/images/theism.svg" alt="theism" />
          </div>
          <div className="infinitheism-slide__section-content">
            <p>A group that believes in the existence of God.</p>
          </div>
        </div>

        {/* INFINITHEISM Section */}
        <div 
          ref={infinitheismRef}
          className={`infinitheism-slide__section ${currentSection === 3 ? 'active' : ''} ${currentSection === 4 ? 'compact' : ''}`}
        >
          <div className="infinitheism-slide__section-logo">
            <img src="/images/infinitheism.svg" alt="infinitheism" />
          </div>
          <div className="infinitheism-slide__section-content">
            <p>A group of people who have unflinching faith in an infinite cosmic presence.</p>
            <p>Anyone who is seeking a breakthrough in the path of infinitheism towards Holistic Abundance is an infinitheist. A new world is evolving which understands and follows the process of destiny designing to embrace Holistic Abundance – with faith, seeking breakthroughs in life. Those who believe in that are called infinitheists and the path they follow is called infinitheism.</p>
            {/* <div className="infinitheism-slide__audio-btn">
              <button className="audio-button">
                🔊 Click to listen how to pronounce it?
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
