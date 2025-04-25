import React from 'react';

function Rewards() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3D3D3', // Matches Schedule background
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            color: '#2e7d32', // Green from Schedule
            fontSize: '36px',
            fontWeight: 'bold',
          }}
        >
          Coming Soon
        </h1>
      </div>
    </div>
  );
}

export default Rewards;