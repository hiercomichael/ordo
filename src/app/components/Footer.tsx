import React from 'react'
import './Footer.scss'
import './Section.scss'
import Icon from '../assets/icon.png'
import Image from 'next/image'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <hr className="section-hr"/>
      <Image src={Icon} alt="" className="footer-icon" />
      <div className="footer-link-container">
        <a href="#" className="footer-link">KNIGHT</a>
        <a href="#" className="footer-link">SHIELD</a>
        <a href="#" className="footer-link">TEAM</a>
        <a href="#" className="footer-link">FAQS</a>
      </div>
      <div className="logo-link-container">
        <a href="" className="footer-logo-link">
          <img src="" alt="" className="footer-icon-img" />
        </a>
        <a href="" className="footer-logo-link">
          <img src="" alt="" className="footer-icon-img" />
        </a>
        <a href="" className="footer-logo-link">
          <img src="" alt="" className="footer-icon-img" />
        </a>
      </div>
      <div className="footer-copyright">©{currentYear} Ordo Nemesis</div>
      <div className="footer-created">Created by xxxtentacles</div>
    </div>
  )
}

export default Footer