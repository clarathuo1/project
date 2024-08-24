import React from 'react'
import Logo from "../Components/Assets/Logo.svg"

import "./NavBar.css"
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <nav>
      <div className='nav-logo-container'>
        <img src={Logo} alt='' />
      </div>
      <div className='nav-links-container'>
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/recipes"
        className="nav-link"
      >
        Recipes
      </NavLink>
      <NavLink
        to="/testimonials"
        className="nav-link"
      >
        Testimonials
      </NavLink>
      </div>
        
        
    </nav>
  )
}

export default NavBar