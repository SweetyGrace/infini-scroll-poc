'use client';

import { PerpendicularCarousel } from '@/components/carousel/PerpendicularCarousel';
import { FixedBackground } from '@/components/background/FixedBackground';
import { Header } from '@/components/header/Header';
import { sampleSlides } from '@/lib/carouselConfig';

export default function Home() {
  return (
    <main>
      <Header />
      <FixedBackground />
      <PerpendicularCarousel slides={sampleSlides} autoPlay={true} />
    </main>
  );
}
