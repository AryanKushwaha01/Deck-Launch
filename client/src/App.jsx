import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PitchDeckAudit from './pages/PitchDeckAudit';
import About from './pages/About';
import Tools from './pages/Tools';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audit" element={<PitchDeckAudit />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </Router>
  );
}

export default App;
