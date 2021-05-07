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
      <Project 
        img={metAPI}
        title="metAPI"
        tech="JavaScript, HTML5, SASS, Heroku, REST API, Mocha, Chai."
        demo="https://metapi-app.herokuapp.com/"
        code="https://github.com/itsnameissteven/metAPI"
      />
      <Project 
        img={Brew}
        title="Brew by Design"
        tech="JavaScript, React, React Router, Heroku, REST API, Cypress"
        demo="https://beer-by-design.herokuapp.com/"
        code="https://github.com/itsnameissteven/Beer-by-Design"
      />
      <Project 
        img={overlook}
        title="Overlook"
        tech="JavaScript, HTML5, SASS, Heroku, REST API, Mocha, Chai."
        demo="https://itsnameissteven.github.io/Overlook-Hotel/"
        code="https://github.com/itsnameissteven/Overlook-Hotel"
      />
    </div>  
  )
}

export default Projects;
