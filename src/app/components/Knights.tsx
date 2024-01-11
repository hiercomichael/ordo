import React from 'react'
import './Knights.scss'
import knights from '../assets/knights.gif';
import './Section.scss'

const Knights = () => {
  return (
    <div className = "knights">
      <div className="section-title">
        KNIGHTS
        <hr className="section-hr"/>
      </div>
      <div className="knights-container">
        <div className="knights-img-container">
          <img className="knights-image" src={knights.src} alt="" />
            <div className="knights-shadow"></div>
        </div>
        <div className="knights-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit vero provident esse, consequatur inventore voluptatibus consequuntur placeat dolorem nulla ut laboriosam earum soluta, nam facere aspernatur quaerat sint enim.
        </div>
        <a href="" className="knights-link">VIEW KNIGHTS</a>
      </div>
    </div>
  )
}

export default Knights