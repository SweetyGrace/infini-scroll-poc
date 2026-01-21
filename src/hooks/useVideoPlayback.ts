import { useEffect, useRef, useState, RefObject } from 'react';
import { VideoPlaybackState } from '@/types/carousel.types';

export const useVideoPlayback = (
  videoRef: RefObject<HTMLVideoElement>,
  isVisible: boolean
) => {
  const [playbackState, setPlaybackState] = useState<VideoPlaybackState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    isLoaded: false,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setPlaybackState((prev) => ({
        ...prev,
        duration: video.duration,
        isLoaded: true,
      }));
    };

    const handleTimeUpdate = () => {
      setPlaybackState((prev) => ({
        ...prev,
        currentTime: video.currentTime,
      }));
    };

    const handlePlay = () => {
      setPlaybackState((prev) => ({
        ...prev,
        isPlaying: true,
      }));
    };

    const handlePause = () => {
      setPlaybackState((prev) => ({
        ...prev,
        isPlaying: false,
      }));
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Auto-play failed:', error);
        });
      }
    } else {
      video.pause();
    }
  }, [isVisible, videoRef]);

  return playbackState;
};
