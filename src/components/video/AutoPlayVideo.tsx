'use client';

import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useVideoPlayback } from '@/hooks/useVideoPlayback';
import './AutoPlayVideo.scss';

interface AutoPlayVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({
  src,
  poster,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIntersectionObserver(videoRef, { threshold: 0.1 });
  const playbackState = useVideoPlayback(videoRef, isVisible);

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
      {playbackState.isPlaying && (
        <div className="auto-play-video__indicator">
          <span>Playing</span>
        </div>
      )}
    </div>
  );
};
