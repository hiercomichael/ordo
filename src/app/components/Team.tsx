"use client"; 

import React, { useState } from 'react';
import TeamBox from './TeamBox';
import './Team.scss';
import './Footer.scss';
import './Section.scss';
import Team1 from '../assets/trader0.jpg';
import Team2 from '../assets/trader1.jpg';
import Team3 from '../assets/trader2.jpg';
import Team4 from '../assets/trader3.jpg';

const Team: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectedDesc, setSelectedDesc] = useState<string | null>(null);

  const handleTeamClick = (teamName: string) => {
    setSelectedTeam(teamName);
    
    if (teamName === 'Moon Moon') 
      setSelectedDesc("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
    else if (teamName === 'Junster')
      setSelectedDesc("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
    else if (teamName === 'Big Biceps')
      setSelectedDesc("BICEPS");
    else if (teamName === 'Adam')
      setSelectedDesc("Adam");
    else setSelectedDesc("");
  };

  return (
    <div className="team">
      <div className="section-title">
        DARK COUNCIL
        <hr className="section-hr" />
      </div>
      <div className="team-container">
        <TeamBox backgroundImage={Team1.src} onClick={() => handleTeamClick('Moon Moon')} />
        <TeamBox backgroundImage={Team2.src} onClick={() => handleTeamClick('Junster')} />
        <TeamBox backgroundImage={Team3.src} onClick={() => handleTeamClick('Big Biceps')} />
        <TeamBox backgroundImage={Team4.src} onClick={() => handleTeamClick('Adam')} />
      </div>
      <div className="team-text-container">
        <div className="team-name">{selectedTeam}</div>
        <div className="team-desc">{selectedDesc}</div>
      </div>
    </div>
  );
};

export default Team;