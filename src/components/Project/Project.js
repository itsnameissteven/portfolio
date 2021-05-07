import React from "react";

const Project = ({ img, title, tech, demo, code }) => {
  return (
    <div className='project'>
      <img className="project__img" src={img} alt={title} />
      <div className="project__about">
        <h3 className="project__about__header">{title}</h3>
        <p className="project__about__tech">{tech}</p>
        <div className="project__btn-container">
          <a href={demo}>
            <button className="project__btn btn">Demo</button>
          </a>
          <a href={code}>
            <button className="project__btn btn">Code</button>
          </a> 
        </div>
      </div>
    </div>
  )
}

export default Project;