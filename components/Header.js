import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/work'>WORK</Link></li>
        <li><Link to='/play'>PLAY</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
