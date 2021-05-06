import React from 'react';
import rancidTomatillos from '../../assets/rancid_tomatillos.png';
import metAPI from '../../assets/metAPI.png';
import overlook from '../../assets/overlook.png';
import Brew from '../../assets/brew_by_design.png';

const Projects = () => {
  return (
    <div className="projects">
      <div className='project'>
        <img className="project__img" src={rancidTomatillos} alt='Rancid Tomatillos' />
        <div className="project__about">

        </div>
      </div>
      <div className='project'>
        <img className="project__img" src={metAPI} alt='Rancid Tomatillos' />
        <div className="project__about">

        </div>
      </div>
      <div className='project'>
        <img className="project__img" src={Brew} alt='Rancid Tomatillos' />
        <div className="project__about">

        </div>
      </div>
      <div className='project'>
        <img className="project__img" src={overlook} alt='Rancid Tomatillos' />
        <div className="project__about">

        </div>
      </div>
    </div>  
  )
}

export default Projects;
