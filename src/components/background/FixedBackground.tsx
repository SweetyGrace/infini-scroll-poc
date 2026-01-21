'use client';

import React from 'react';
import './FixedBackground.scss';

interface FixedBackgroundProps {
  imageUrl?: string;
  gradient?: string;
  className?: string;
}

export const FixedBackground: React.FC<FixedBackgroundProps> = ({
  imageUrl,
  gradient = 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
  className = '',
}) => {
  return (
    <div 
      className={`fixed-background ${className}`}
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : gradient,
      }}
    />
  );
};
