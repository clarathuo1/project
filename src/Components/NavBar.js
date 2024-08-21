import React from 'react'

import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <Link to="/" >Website</Link>
        <ul>
            <Link to="/about" >About</Link>
            <Link to="/services" >Services</Link>
            <Link to="/contact us" >Contact Us</Link>
        </ul>
    </nav>
  )
}

export default NavBar