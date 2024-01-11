"use client";

import React, { useState, useEffect } from 'react';
import './Banner.scss'



const Banner = () => {

  const [seconds, setSeconds] = useState(2);
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    // Clean up the interval when the component unmounts or when seconds reach 0
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div id="banner">
      <div className="banner-quote">
        In the shadowed embrace of <span className="banner-red">Ordo Nemesis</span>, 
        where shields bear the weight of sins and knights 
        wield blades stained in the ink of vengeance, the 
        line between protector and predator blurs, and the 
        clangor of shields echoes the lament of a world 
        lost to the abyss.
      </div>
      <div className="banner-container">
        <img src="./img/banner-bw.png" alt="" className={seconds === 0 ? "banner-img banner-img--done" : "banner-img"}/>
        <img src="./img/banner-title.png" alt="" className={seconds === 0 ? "banner-title banner-title--show" : "banner-title"} />
      </div>
      <div className={seconds < 2 ? "curtain-top curtain-top--done" : "curtain-top"}></div>
      <div className={seconds < 2 ? "curtain-bottom curtain-bottom--done" : "curtain-bottom"}></div>
      <a href="#knights" className="banner-knight-arrow">
        <img src="./img/arrow-down.png" alt="" className="banner-arrow" />
      </a>

    </div>
  )
}

export default Banner