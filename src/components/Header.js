import React from 'react';
import style from '../styles/header.css';
import { Link } from 'react-scroll'; // Assuming you are using a separate CSS file for the header

function Header() {
  return (
    <header className="header">
        <link rel='stylesheet' src={style} />
      <div className="header-content">
        <h1>Welcome to Litle Lemon</h1>

        <h2>An authentic mediterranean cuisine for a perfect family & freinds dining </h2>
        <a href='/reserve'>
        <button className="reserve-button">Reserve Now</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
