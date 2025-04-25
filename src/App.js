// src/App.js
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Schedule from './components/Schedule';
import About from './components/About';
import CO2 from './components/CO2';
import Rewards from './components/Rewards';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<> <Header /> <Main /> </>} />
        <Route path="/schedule" element={ <Schedule /> } />
        <Route path="/about" element={<> <Header /> <About /> </>} />
        <Route path="/co2" element={<CO2 />} /> 
        <Route path="/rewards" element={ <Rewards /> } />

      </Routes>
    </div>
  );
}

export default App;


