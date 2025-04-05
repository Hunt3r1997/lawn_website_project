// src/components/About.js
import React from 'react';
import aboutBackgroundImage from '../images/about_background.JPG';

function About() {
  return (
    <div
      style={{
        backgroundColor: '#D3D3D3',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 20px 20px 20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '1200px',
          width: '100%',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        {/* Left Side: Shrunk Image */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={aboutBackgroundImage}
            alt="About Us"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          />
        </div>

        {/* Right Side: Your Story */}
        <div
          style={{
            flex: '1',
            color: '#333',
            textAlign: 'left',
          }}
        >
          <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>My Story</h1>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Hi, I’m Hunter, the heart and hustle behind Amped Up Lawn Care. I launched this venture with a dual mission: to shrink my carbon footprint and sharpen my skills in business and software development. What started as a passion for sustainability turned into my first big project—building this website from scratch as a senior at Southern Nazarene University, set to graduate in May 2025. Armed with electric mowers and a drive to make a difference, I’m reducing CO2 emissions one lawn at a time while learning the ropes of entrepreneurship and coding. This isn’t just about making money—it’s about growing, innovating, and leaving the planet a little greener than I found it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;