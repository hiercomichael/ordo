import React from 'react';
import './TeamBox.scss';

interface TeamBoxProps {
  backgroundImage: string;
  onClick?: () => void;
}

const TeamBox: React.FC<TeamBoxProps> = ({ backgroundImage, onClick }) => {
  const boxStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="teambox" style={boxStyle} onClick={onClick}>
      {/* Your TeamBox content goes here */}
    </div>
  );
};

export default TeamBox;