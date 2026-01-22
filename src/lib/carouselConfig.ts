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
    // videoUrl: '/videos/cup.mp4',
    imageUrl: '/images/starting-slide.png',
  },
  {
    id: '2',
    title: 'The Datejust Collection',
    description: 'Classic elegance meets modern precision',
    backgroundColor: '#ffffff',
    imageUrl: '/images/section-two.svg',
    attachedToNext: true, // Slide 3 attached to slide 2
    // isStaticPage: true,
  },
  {
    id: '3',
    title: 'What is infinitheism',
    description: 'Understanding ism, theism, and infinitheism',
    backgroundColor: '#ffffff',
    isInfinitheismSlide: true,
    attachedToNext: true, // Slide 4 attached to slide 3
  },
  {
    id: '4',
    title: 'Motor Sports Heritage',
    description: 'A legacy of excellence and endurance',
    backgroundColor: '#000',
    imageUrl: '/images/section-four.svg',
    // isExpansion: true,
    expansionImageSrc: '/images/slide-four.jpg',
    expansionImageAlt: 'Bespoke Interior',
    expansionReverse: true,
  },
  {
    id: '5',
    title: 'Craftsmanship Refined',
    description: 'Where tradition meets innovation',
    // backgroundColor: '#0d0d0d',
    imageUrl: '/images/section-fiive.jpg',
    // videoUrl: '/videos/watch-video.mp4',
  },
];
