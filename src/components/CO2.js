import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CO2() {
  // Data for the graph: x-axis (yards mowed) and y-axis (CO2 saved and CO2 polluted)
  const data = {
    labels: [1, 5, 10, 15, 20], // Yards mowed
    datasets: [
      {
        label: 'CO2 Saved (lbs)',
        data: [12.5, 62.5, 125, 187.5, 250], // CO2 saved (pink line)
        borderColor: '#FF69B4', // Pink for CO2 saved
        backgroundColor: 'rgba(255, 105, 180, 0.2)', // Light pink area under the curve
        fill: true, // Fill the area under the curve
        tension: 0.4, // Smooth curve
        pointRadius: 5, // Radius of the points on the line
        pointBackgroundColor: '#FF69B4', // Point color for CO2 saved
        pointHoverRadius: 7, // Hover effect on points
      },
      {
        label: 'CO2 Polluted (lbs)',
        data: [25, 125, 250, 375, 500], // CO2 polluted (blue line)
        borderColor: '#1E90FF', // Blue for CO2 polluted
        backgroundColor: 'rgba(30, 144, 255, 0.2)', // Light blue area under the curve
        fill: true, // Fill the area under the curve
        tension: 0.4, // Smooth curve
        pointRadius: 5, // Radius of the points on the line
        pointBackgroundColor: '#1E90FF', // Point color for CO2 polluted
        pointHoverRadius: 7, // Hover effect on points
      },
    ],
  };

  // Options for customization
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'CO2 Savings vs CO2 Pollution (Gas vs Electric)',
        font: {
          size: 24,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} lbs`; // Tooltip content
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Yards Mowed',
        },
      },
      y: {
        title: {
          display: true,
          text: 'CO2 (lbs)',
        },
        beginAtZero: true, // Ensures the y-axis starts at 0
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
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <h1>CO2 Savings vs CO2 Pollution</h1>
      <p>Compare the CO2 saved using electric equipment vs the CO2 polluted by gas-powered equipment:</p>
      <Line data={data} options={options} />
    </div>
  );
}

export default CO2;
