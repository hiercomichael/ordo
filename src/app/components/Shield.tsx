import React , {useState} from 'react'
import './Shield.scss'

interface ShieldProps {
  image: string;
  bgcolor: string;
  name: string;
  desc: string;
}




const Shield: React.FC<ShieldProps> = ({ image , bgcolor, name, desc}) => {
  return (
    <div className={`shield-container shield-container--${bgcolor}`}>
      <img src={`./img/${image}`} alt="" className="shield-img" />
      <div className="shield-name">{name}</div>
      <div className="shield-desc">{desc}</div>
      <div className="shield-line"></div>
    </div>
  );
};

export default Shield