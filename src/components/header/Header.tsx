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
      <div className="header__container">
        {/* Left: Menu */}
        <div className="header__left">
          <button className="header__menu-btn" aria-label="Menu">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M0 1H20M0 7H20M0 13H20" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <span>Menu</span>
          </button>
        </div>

        {/* Center: Logo */}
        {/* <div className="header__center">
          <a href="/" className="header__logo" aria-label="Rolex">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 0L24.5 8L33.5 6.5L28.5 15L36 20L28.5 25L33.5 33.5L24.5 32L20 40L15.5 32L6.5 33.5L11.5 25L4 20L11.5 15L6.5 6.5L15.5 8L20 0Z" fill="#A47E3B"/>
            </svg>
          </a>
        </div> */}

      

        {/* Right: Actions */}
        <div className="header__right">
          <Link href="/teaching" className="header__action" aria-label="Teachings">
             {/* <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
              <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 18 7 18C7 18 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="currentColor"/>
            </svg> */}
            <span>Teachings</span>
           
          </Link>
         <button className="header__action" aria-label="Store locator">
           <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M13 13L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>Search</span>
           
          </button>
         
  {/*
          <button className="header__action" aria-label="Favourites">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
              <path d="M9 16L7.68 14.82C3.06 10.68 0 7.91 0 4.5C0 1.98 1.98 0 4.5 0C5.94 0 7.32 0.66 8.19 1.71L9 2.58L9.81 1.71C10.68 0.66 12.06 0 13.5 0C16.02 0 18 1.98 18 4.5C18 7.91 14.94 10.68 10.32 14.82L9 16Z" fill="currentColor"/>
            </svg>
            <span>Favourites</span>
          </button> */}
        </div>
      </div>
    </header>
  );
};
