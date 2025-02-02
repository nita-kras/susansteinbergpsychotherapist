import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import About from './components/About';
import PracticeDescription from './components/PracticeDescription';
import SessionDetails from './components/SessionDetails';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1 className="name">Susan Steinberg</h1>
          <p className="subtitle">Psychotherapist</p>
        </header>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-description" element={<PracticeDescription />} />
            <Route path="/session-details" element={<SessionDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;