'use client';

import React from 'react';
import Link from 'next/link';
import './Header.scss';

interface HeaderProps {
  isVisible?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isVisible = true }) => {
  return (
    <header className={`header ${isVisible ? 'header--visible' : 'header--hidden'}`}>
      <div className="header__wrapper">
        {/* Top row: Just the dots */}
        <div className="header__top">
          <Link href="/" className="header__dots-link" aria-label="Infinitheism">
            <img src="/images/pillar-dots.svg" alt="" className="header__dots" />
          </Link>
        </div>
        
        {/* Bottom row: All navigation text */}
        <div className="header__bottom">
          <div className="header__left">
            <Link href="/teaching" className="header__link">
              <span className="header__mahtria">Mahatria</span> teachings
            </Link>
            <div className="header__link">
              Connect with <span className="header__mahtria">Mahatria</span>
            </div>
          </div>

          <div className="header__center">
            <Link href="/" className="header__logo" aria-label="Infinitheism">
              <img src="/images/infinitheism.svg" alt="Infinitheism" className="header__logo-img" />
            </Link>
          </div>

          <div className="header__right">
            <div className="header__link">
              Seeker experiences
            </div>
            <div className="header__link">
              Growth tools
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
