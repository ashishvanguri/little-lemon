import React, { useState } from 'react';
import logo from '../images/Logo .svg'
import nav from '../styles/Nav.css'


function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  return (
    <nav className="navbar">
        <link rel='stylesheet' src={nav} />
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Little Lemon Logo" />
        </a>
      </div>

      {/* Hamburger menu */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isMenuVisible ? 'visible' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reserve">Reserve Now</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
