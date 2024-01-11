"use client";

import React from 'react'
import "./KnightsBox.scss"

const KnightsBox = () => {
  return (
    <div className="knights-box">
      <div className="knights-img-container">
        <img src="./img/sample-knight.jpg" alt="" className="knights-img" />
      </div>
      <div className="knights-name">NAME</div>
    </div>
  )
}

export default KnightsBox