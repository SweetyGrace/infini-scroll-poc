import { useState, useEffect, useCallback, RefObject } from 'react';

interface UseScrollSnapOptions {
  threshold?: number;
  enabled?: boolean;
}

export const useScrollSnap = (
  containerRef: RefObject<HTMLElement>,
  options: UseScrollSnapOptions = {}
) => {
  const { threshold = 0.5, enabled = true } = options;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const slides = container.children;
    if (index < 0 || index >= slides.length) return;

    const slide = slides[index] as HTMLElement;
    slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setCurrentIndex(index);
  }, [containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !enabled) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);

        // Calculate current slide based on scroll position
        // Highlight when slide is more than halfway visible
        const scrollTop = container.scrollTop;
        const slideHeight = container.clientHeight;
        const newIndex = Math.floor(scrollTop / slideHeight + 0.5);
        
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      }, 150);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [containerRef, enabled, currentIndex]);

  return {
    currentIndex,
    isScrolling,
    scrollToIndex,
  };
};
