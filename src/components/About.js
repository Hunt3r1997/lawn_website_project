import React from 'react';
import aboutBackgroundImage from '../images/about_background.JPG';  // Import About background image

function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${aboutBackgroundImage})`,  // Set the About page background image
        backgroundSize: 'cover',  // Ensure the image fully covers the viewport
        backgroundPosition: 'center',  // Center the background image
        height: '100vh',  // Full screen height
        display: 'flex',  // Use flexbox to center content
        flexDirection: 'column',  // Stack content vertically
        justifyContent: 'center',  // Center content vertically
        alignItems: 'center',  // Center content horizontally
        color: 'white',  // Text color for visibility on dark backgrounds
        textAlign: 'center',  // Center align text
        padding: '20px',  // Optional: space around text
      }}
    >
      <h1>About Us</h1>
      
    </div>
  );
}

export default About;
