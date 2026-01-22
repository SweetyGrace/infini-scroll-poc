'use client';

import { PerpendicularCarousel } from '@/components/carousel/PerpendicularCarousel';
import { FixedBackground } from '@/components/background/FixedBackground';
import { Header } from '@/components/header/Header';
import { sampleSlides } from '@/lib/carouselConfig';
import { useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleCarouselScroll = (scrollY: number, direction: 'up' | 'down') => {
    if (scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <main>
      <Header isVisible={true} isScrolled={isScrolled} />
      <FixedBackground />
      <PerpendicularCarousel slides={sampleSlides} autoPlay={true} onScroll={handleCarouselScroll} />
    </main>
  );
}
