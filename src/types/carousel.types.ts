export interface CarouselSlideData {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
  backgroundColor?: string;
}

export interface CarouselConfig {
  slideDuration: number;
  transitionDuration: number;
  autoPlay: boolean;
  snapThreshold: number;
}

export interface VideoPlaybackState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isLoaded: boolean;
}

export interface CarouselNavigationProps {
  totalSlides: number;
  currentSlide: number;
  onNavigate: (index: number) => void;
}

export interface CarouselProgressProps {
  progress: number;
  currentSlide: number;
  totalSlides: number;
}
