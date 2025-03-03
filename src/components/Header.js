// src/components/Header.js
import React from 'react';  // Import React

function Header() {
  return (
    <header>
      <h1>Amped Up Lawn Care</h1>
      <nav>
        <ul>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#co2">CO2</a></li>
          <li><a href="#rewards">Rewards</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;  // Export Header component
