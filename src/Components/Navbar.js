import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='navbar-main'>
          <h1>VideoBuddy</h1>
          <div className='navbar-links'>
            <NavLink exact className = "links" to="/"> Home </NavLink>
            <NavLink exact className = "links" to="/about"> About </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;