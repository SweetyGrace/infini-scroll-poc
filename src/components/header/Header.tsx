'use client';

import React from 'react';
import Link from 'next/link';
import './Header.scss';

interface HeaderProps {
  isVisible?: boolean;
  isScrolled?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isVisible = true, isScrolled = false }) => {
  return (
    <header className={`header ${isVisible ? 'header--visible' : 'header--hidden'}`}>
      <div className="header__wrapper">
        <nav className="header__nav">
          <Link href="/" className="header__link">HOME</Link>
          <Link href="/methodology" className="header__link">METHODOLOGY</Link>
          <Link href="/prespective" className="header__link">PRESPECTIVE</Link>
          <Link href="/endorsement" className="header__link">ENDORSEMENT</Link>
          
          <Link href="/" className="header__logo" aria-label="LAMH">
            <img src="/images/new_logo.png" alt="LAMH" className="header__logo-icon" />
          </Link>
          
          <Link href="/about-deepak" className="header__link">ABOUT DEEPAK</Link>
          <Link href="/case-studies" className="header__link">CASE STUDIES</Link>
          <Link href="/about-lamh" className="header__link">ABOUT LAMH</Link>
          <Link href="/team-contact" className="header__link">TEAM & CONTACT</Link>
        </nav>
      </div>
    </header>
  );
};
