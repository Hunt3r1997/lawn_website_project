import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CO2() {
  const labels = [
    'Customer 1', 'Customer 2', 'Customer 3', 'Customer 4', 'Customer 5',
    'Customer 6', 'Customer 7', 'Customer 8', 'Customer 9', 'Customer 10', 'Customer 11'
  ];

  const co2Saved = [144, 72, 144, 72, 144, 144, 72, 72, 72, 72, 144];
  const co2Gas = co2Saved.map(val => val * 2);

  const data = {
    labels,
    datasets: [
      {
        label: 'CO2 Saved - Electric Mower (lbs)',
        data: co2Saved,
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
        borderWidth: 1,
      },
      {
        label: 'CO2 Polluted - Gas Mower Would Have Emitted (lbs)',
        data: co2Gas,
        backgroundColor: '#E53935',
        borderColor: '#B71C1C',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'CO2 Saved (Electric) vs Gas Mower Emissions - 2025',
        color: '#ffffff',
        font: { size: 22, family: 'Orbitron' },
      },
      tooltip: {
        bodyFont: { family: 'Orbitron' },
        titleFont: { family: 'Orbitron' },
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} lbs`;
          },
        },
      },
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff',
          font: { family: 'Orbitron', size: 11 },
        },
      },
    },
    scales: {
      x: {
        title: { display: true, text: 'Customers', color: '#ffffff', font: { family: 'Orbitron' } },
        ticks: { color: '#ffffff', font: { family: 'Orbitron', size: 10 } },
        grid: { color: 'rgba(255,255,255,0.1)' },
      },
      y: {
        title: { display: true, text: 'CO2 (lbs)', color: '#ffffff', font: { family: 'Orbitron' } },
        ticks: { color: '#ffffff', font: { family: 'Orbitron', size: 10 } },
        grid: { color: 'rgba(255,255,255,0.1)' },
        beginAtZero: true,
      },
    },
    animation: {
      easing: 'easeInOutQuad',
    },
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#1b5e20',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        boxSizing: 'border-box',
        fontFamily: 'Orbitron, sans-serif',
      }}
    >
      <h1 style={{ fontFamily: 'Orbitron, sans-serif', color: '#ffffff', marginBottom: '10px' }}>
        2025 CO2 Impact
      </h1>
      <p style={{ color: '#c8e6c9', marginBottom: '30px', fontFamily: 'Orbitron, sans-serif', fontSize: '14px' }}>
        See how much CO2 Amped Up Lawn Care saved compared to gas-powered mowers:
      </p>
      <div style={{ width: '100%', maxWidth: '900px' }}>
        <Bar data={data} options={options} />
      </div>
      <div style={{ marginTop: '30px', fontSize: '20px', fontWeight: 'bold', color: '#69f0ae', fontFamily: 'Orbitron, sans-serif' }}>
        🌱 Total CO2 Saved in 2025: 1,152 lbs
      </div>
      <footer style={{ marginTop: '40px', fontSize: '12px', color: '#a5d6a7', fontFamily: 'Orbitron, sans-serif' }}>
        © 2025 Amped Up Lawn Care. All rights reserved.
      </footer>
    </div>
  );
}

export default CO2;
