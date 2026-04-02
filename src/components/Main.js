import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/background.jpg.jpg';

function Main() {
  return (
    <main
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div
        className="buttons"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <a href="tel:4055357110">
          <button className="oval-button">Get a Quote</button>
        </a>
        <Link to="/co2">
          <button className="oval-button">CO2</button>
        </Link>
        <Link to="/rewards">
          <button className="oval-button">Rewards</button>
        </Link>
        <Link to="/about">
          <button className="oval-button">About</button>
        </Link>
      </div>
    </main>
  );
}

export default Main;
