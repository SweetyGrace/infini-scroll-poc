'use client';

import { PerpendicularCarousel } from '@/components/carousel/PerpendicularCarousel';
import { FixedBackground } from '@/components/background/FixedBackground';
import { sampleSlides } from '@/lib/carouselConfig';

export default function Home() {
  return (
    <main>
      <FixedBackground />
      <PerpendicularCarousel slides={sampleSlides} autoPlay={false} />
    </main>
  );
}
