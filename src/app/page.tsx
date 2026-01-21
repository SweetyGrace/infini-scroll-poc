'use client';

import { PerpendicularCarousel } from '@/components/carousel/PerpendicularCarousel';
import { FixedBackground } from '@/components/background/FixedBackground';
import { Header } from '@/components/header/Header';
import { sampleSlides } from '@/lib/carouselConfig';
import { useState } from 'react';

export default function Home() {
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleCarouselScroll = (scrollY: number, direction: 'up' | 'down') => {
    if (direction === 'down' && scrollY > 80) {
      setHeaderVisible(false);
    } else if (direction === 'up') {
      setHeaderVisible(true);
    }
  };

  return (
    <main>
      <Header isVisible={headerVisible} />
      <FixedBackground />
      <PerpendicularCarousel slides={sampleSlides} autoPlay={true} onScroll={handleCarouselScroll} />
    </main>
  );
}
