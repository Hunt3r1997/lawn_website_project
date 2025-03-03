import React from 'react';
import './App.css';  // Custom styles
import Header from './components/Header';  // Importing Header component
import Main from './components/Main';  // Importing Main component
import Footer from './components/Footer';  // Importing Footer component
import { Routes, Route } from 'react-router-dom';  // Added for routing
import Schedule from './components/Schedule';  // Added to import the Schedule component
import About from './components/About';  // Import the About component
import CO2 from './components/CO2'; // Importing from co2 component

function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header />

      {/* Main content */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="/co2" element={<CO2 />} /> {/* Add route for CO2 graph */}
        </Routes>
  

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;


