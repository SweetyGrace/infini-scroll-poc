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
  gradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
