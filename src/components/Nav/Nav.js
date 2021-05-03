import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';


const Nav = ({ dropDown, openDropDown}) => {


  return(
    <nav className='nav'>
      <h1 className="nav__header">It me Steven</h1>
      <CgMenu className="nav__hamburger" onClick={openDropDown}/>
      <div className={`nav__link__container ${dropDown ? "unhide" : null}`}>
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
      </div>
    </nav>
  )
}

export default Nav;

