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
    title: 'Welcome to the Experience',
    description: 'Discover amazing content with perpendicular scrolling',
    backgroundColor: '#667eea',
    imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200',
  },
  {
    id: '2',
    title: 'Seamless Navigation',
    description: 'Scroll through content with smooth transitions',
    backgroundColor: '#764ba2',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: '3',
    title: 'Immersive Content',
    description: 'Videos auto-play as you scroll into view',
    backgroundColor: '#f093fb',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200',
  },
  {
    id: '4',
    title: 'Responsive Design',
    description: 'Perfect experience on any device',
    backgroundColor: '#4facfe',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: '5',
    title: 'Built with Modern Tech',
    description: 'Next.js, TypeScript, and SCSS',
    backgroundColor: '#00f2fe',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200',
  },
];
