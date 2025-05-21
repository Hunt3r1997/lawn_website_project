// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header
      style={{
        backgroundColor: 'transparent',
        padding: '20px',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        width: '100%',
        color: 'white',
      }}
    >
      <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: '700', color: 'white', fontSize: '36px' }}>
  Amped Up Lawn Care
</h1>

    </header>
  );
}

export default Header;
