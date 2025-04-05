// src/App.js
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Schedule from './components/Schedule';
import About from './components/About';
import CO2 from './components/CO2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<> <Header /> <Main /> </>} />
        <Route path="/schedule" element={<> <Header /> <Schedule /> </>} />
        <Route path="/about" element={<> <Header /> <About /> </>} />
        <Route path="/co2" element={<CO2 />} /> {/* No Header here */}
      </Routes>
    </div>
  );
}

export default App;


