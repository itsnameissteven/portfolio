import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return(
    <nav className='nav'>
      <h1 className="nav__header">It me Steven</h1>
      <NavLink 
        className="nav__link" 
        to='/about-me' 
        activeClassName="nav__link--active"
      >
        About
      </NavLink>
      <NavLink 
        className="nav__link" 
        to='/projects' 
        activeClassName="nav__link--active"
      >
        Projects
      </NavLink>
      <NavLink 
        className="nav__link" 
        to='/resume' 
        activeClassName="nav__link--active"
      >
        Resume
      </NavLink>
      <NavLink 
        className="nav__link" 
        to='/contact' 
        activeClassName="nav__link--active"
      >
        Contact
      </NavLink>
    </nav>
  )
}

export default Nav;

