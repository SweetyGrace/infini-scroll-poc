'use client';

import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useVideoPlayback } from '@/hooks/useVideoPlayback';
import './AutoPlayVideo.scss';

interface AutoPlayVideoProps {
  src: string;
  poster?: string;
  className?: string;
  isCurrentSlide?: boolean;
}

export const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({
  src,
  poster,
  className = '',
  isCurrentSlide = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIntersectionObserver(videoRef, { threshold: 0.5 });
  const shouldPlay = isVisible && isCurrentSlide;
  const playbackState = useVideoPlayback(videoRef, shouldPlay);

  return (
    <div className={`auto-play-video ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="auto-play-video__element"
        loop
        muted
        playsInline
      />
      {/* {playbackState.isPlaying && (
        <div className="auto-play-video__indicator">
          <span>Playing</span>
        </div>
      )} */}
    </div>
  );
};
