import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CO2() {
  const labels = [
    'Customer 1', 'Customer 2', 'Customer 3', 'Customer 4', 'Customer 5',
    'Customer 6', 'Customer 7', 'Customer 8', 'Customer 9', 'Customer 10', 'Customer 11'
  ];

  // CO2 saved per customer (electric mower)
  const co2Saved = [144, 72, 144, 72, 144, 144, 72, 72, 72, 72, 144];

  // CO2 a gas mower would have emitted (2x the saved amount)
  const co2Gas = co2Saved.map(val => val * 2);

  const data = {
    labels,
    datasets: [
      {
        label: 'CO2 Saved - Electric Mower (lbs)',
        data: co2Saved,
        backgroundColor: '#4CAF50', // Green - matches your site buttons
        borderColor: '#388E3C',
        borderWidth: 1,
      },
      {
        label: 'CO2 Polluted - Gas Mower Would Have Emitted (lbs)',
        data: co2Gas,
        backgroundColor: '#E53935', // Red - gas pollution
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
        font: { size: 22 },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} lbs`;
          },
        },
      },
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        title: { display: true, text: 'Customers' },
      },
      y: {
        title: { display: true, text: 'CO2 (lbs)' },
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
        padding: '20px',
        backgroundColor: '#d3d3d3',
        borderRadius: '8px',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ fontFamily: 'Orbitron, sans-serif', color: '#2e7d32' }}>
        2025 CO2 Impact
      </h1>
      <p>See how much CO2 Amped Up Lawn Care saved compared to gas-powered mowers:</p>
      <Bar data={data} options={options} />
      <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: '#2e7d32' }}>
        🌱 Total CO2 Saved in 2025: 1,152 lbs
      </div>
    </div>
  );
}

export default CO2;
