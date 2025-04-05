import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import backgroundImage from '../images/background.jpg.jpg';  // Import Home background image

function Main() {
  return (
    <main
      style={{
        backgroundImage: `url(${backgroundImage})`,  // Set the background image
        backgroundSize: 'cover',  // Ensure the image fully covers the viewport
        backgroundPosition: 'center',  // Center the background image
        height: '100vh',  // Full screen height
        display: 'flex',  // Use flexbox to center content
        flexDirection: 'column',  // Stack content vertically
        justifyContent: 'center',  // Center content vertically
        alignItems: 'center',  // Center content horizontally
        textAlign: 'center', // Ensure text is centered

      }}
    >
    

      {/* Button container with .buttons class */}
      <div
        className="buttons"
        style={{
          display: 'flex',
          flexDirection: 'row',  // makes rows left to right
          justifyContent: 'center',  // Center buttons horizontally
          alignItems: 'center',  // Center the buttons vertically
          gap: '20px',  // Add space between the buttons
        }}
      >
        <Link to="/schedule">
          <button className="oval-button">Schedule</button>
        </Link> 

        <Link to ="/co2">
          <button className="oval-button">CO2</button>
        </Link>

        <button className="oval-button">Rewards</button> 

        <Link to="/about">
          <button className="oval-button">About</button>
        </Link>
      </div>
    </main>
  );
}

export default Main;
