import { CarouselConfig, CarouselSlideData } from '@/types/carousel.types';

export const defaultCarouselConfig: CarouselConfig = {
  slideDuration: 5000, // 5 seconds per slide
  transitionDuration: 800, // 800ms transition
  autoPlay: true,
  snapThreshold: 0.5, // 50% scroll threshold for snap
};

export const sampleSlides: CarouselSlideData[] = [
  {
    id: '1',
    title: 'Motor Sports Excellence',
    description: 'Experience the thrill of endurance racing',
    backgroundColor: '#000000',
    videoUrl: '/videos/cup.mp4',
  },
  {
    id: '2',
    title: 'The Datejust Collection',
    description: 'Classic elegance meets modern precision',
    backgroundColor: '#ffffff',
    isStaticPage: true,
  },
  {
    id: '3',
    title: 'Timeless Performance',
    description: 'Precision in every movement',
    backgroundColor: '#0a0a0a',
    videoUrl: '/videos/playing.mp4',
  },
  {
    id: '4',
    title: 'Motor Sports Heritage',
    description: 'A legacy of excellence and endurance',
    backgroundColor: '#141414',
    imageUrl: '/images/homepage-motor-sports-endurance-cover.avif',
  },
  {
    id: '5',
    title: 'Craftsmanship Refined',
    description: 'Where tradition meets innovation',
    backgroundColor: '#0d0d0d',
    videoUrl: '/videos/watch-video.mp4',
  },
];
