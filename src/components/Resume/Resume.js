import React from 'react';
import { Link } from 'react-router-dom';
import resumePDF from '../../assets/Mancine_Resume.pdf';
import resumePNG from '../../assets/Mancine_Resume.png';

const Resume = () => {
  return (
    <div className="resume">
      <a href={resumePDF}>
        <img src={resumePNG} alt="resume"/>
      </a>
    </div>
  )
}

export default Resume;