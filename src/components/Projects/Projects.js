import React from 'react';
import Project from '../Project/Project';
import rancidTomatillos from '../../assets/rancid_tomatillos.png';
import metAPI from '../../assets/metAPI.png';
import overlook from '../../assets/overlook.png';
import Brew from '../../assets/brew_by_design.png';

const Projects = () => {
  return (
    <div className="projects">
      <Project 
        img={rancidTomatillos}
        title="Rancid Tomatillos"
        tech="JavaScript, React, React Router, Heroku, REST API, Cypress"
        demo="https://rancid-tomatillos-max.herokuapp.com/"
        code="https://github.com/knees4bees/rancid-tomatillos"
      />
      {/* <div className='project'>
        <img className="project__img" src={rancidTomatillos} alt='Rancid Tomatillos' />
        <div className="project__about">
          <h3 className="project__about__header">Rancid Tomatillos</h3>
          <p className="project__about__tech">JavaScript, React, React Router, Heroku, REST API, Cypress</p>
          <div className="project__btn-container">
            <a href="https://rancid-tomatillos-max.herokuapp.com/">
              <button className="project__btn btn">Demo</button>
            </a>
            <a href="https://github.com/knees4bees/rancid-tomatillos">
              <button className="project__btn btn">Code</button>
            </a> 
          </div>
        </div>
      </div> */}
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
