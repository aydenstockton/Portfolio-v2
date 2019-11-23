import React from 'react';
import { Link } from 'react-router-dom';
import NameLogo from "./NameLogo";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <div>
          <Link to='/'>
                <NameLogo/>
          </Link>
      </div>
      <ul>
        <li id="home"><Link to='/'>HOME</Link></li>
        <li id="work"><Link to='/work'>WORK</Link></li>
        <li id="play"><Link to='/play'>PLAY</Link></li>
        <li id="about"><Link to='/about'>ABOUT</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
