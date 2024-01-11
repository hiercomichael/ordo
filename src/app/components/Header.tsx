"use client";

import React, { useState } from 'react'
import './Header.scss'
import './Section.scss'

const Header = () => {

  const [color, setColor] = useState(false)

  function changeColor() {
    if(window.scrollY >= 60) {
      setColor(true)
    } else (
      setColor(false)
    )
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header--hide" : "header"}>
      <div className="logo-container">
        <a href="#" className="logo-link">
          <img src="./img/icon.png" alt="" className="header-logo" />
        </a>
      </div>
      <div className="header-links">
        <a href="" className="header-link">KNIGHTS</a>
        <a href="" className="header-link">SHIELDS</a>
        <a href="" className="header-link">TEAM</a>
        <a href="" className="header-link header-link--buy">
          BUY IN
          <img src="./img/me.png" alt="" className="header-me-logo" />
        </a>
      </div>
    </div>
  )
}

export default Header