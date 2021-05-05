import React from 'react';
import resumePDF from '../../assets/Mancine_Resume.pdf';
import resumePNG from '../../assets/Mancine_Resume.png';

const Resume = () => {
  return (
    <div className="resume">
      <a href={resumePDF}>
        <img className="resume__img" src={resumePNG} alt="resume"/>
      </a>
    </div>
  )
}

export default Resume;