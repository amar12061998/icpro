import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Removed Switch import
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Manufacturing from './pages/Manufacturing';
import ControlPanels from './pages/ControlPanels'; 
import ProcessSkids from './pages/ProcessSkids';
import Digitalization from './pages/Digitalization';
// import Footer from './components/Footer'; // Optional if you need it on every page
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Ensure correct path for Font Awesome

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/manufacturing/mcc" element={<ControlPanels />} /> {/* Corrected Route */}
        <Route path="/manufacturing/process-skids" element={<ProcessSkids />} />
        {/* Add other routes here as needed */}
        <Route path="/digitalization" element={<Digitalization />} />
        <Route path="/control-panels" element={<ControlPanels />} /> {/* Added this route */}
      </Routes>
    </Router>
  );
}

export default App;
