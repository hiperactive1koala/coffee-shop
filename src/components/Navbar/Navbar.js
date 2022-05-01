import React from 'react'

import Logo from './Logo'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo/>
      <ul className='list'>
        <li className='nav-item list-item'><a href="#home">HOME</a></li>
        <li className='nav-item list-item'><a href="#about">ABOUT</a></li>
        <li className='nav-item list-item'><a href="#types">TYPES</a></li>
        <li className='nav-item list-item'><a href="#collections">COLLECTIONS</a></li>
      </ul>
      <a className='contact nav-item' href="#contacts">CONTACTS</a>
    </div>
  )
}

export default Navbar