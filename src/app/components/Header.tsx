"use client"; 

import React, { useState, useEffect } from 'react';
import './Header.scss';
import './Section.scss';

const Header = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 60) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', changeColor);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <div className={color ? 'header header--hide' : 'header'}>
      <div className="logo-container">
        <a href="#" className="logo-link">
          <img src="./img/icon.png" alt="" className="header-logo" />
        </a>
      </div>
      <div className="header-links">
        <a href="#" className="header-link">
          KNIGHTS
        </a>
        <a href="#" className="header-link">
          SHIELDS
        </a>
        <a href="#" className="header-link">
          TEAM
        </a>
        <a href="#" className="header-link header-link--buy">
          BUY IN
          <img src="./img/me.png" alt="" className="header-me-logo" />
        </a>
      </div>
    </div>
  );
};

export default Header;