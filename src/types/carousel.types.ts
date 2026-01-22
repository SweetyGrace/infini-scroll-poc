export interface CarouselSlideData {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
  backgroundColor?: string;
  isStaticPage?: boolean; // For slides that should be full static pages
  attachedToNext?: boolean; // For slides that should scroll together with the next slide
  isExpansion?: boolean; // For expansion/content section slides
  expansionImageSrc?: string; // Image for expansion section
  expansionImageAlt?: string; // Alt text for expansion image
  expansionReverse?: boolean; // Reverse layout for expansion section
  isInfinitheismSlide?: boolean; // For the what is infinitheism slide
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
