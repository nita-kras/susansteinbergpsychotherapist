import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome'; // Default section
import About from './components/About'; // About section with photo
import PracticeDescription from './components/PracticeDescription'; // Practice Description section
import SessionDetails from './components/SessionDetails'; // Session Details section
import Contact from './components/Contact'; // Contact section

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'Courier-Oblique' }}>
        <header style={styles.header}>
          <h1 style={styles.name}>Susan Steinberg</h1>
          <p style={styles.subtitle}>Psychotherapist</p>
        </header>
        <Navbar />
        <div style={{ padding: '20px' }}>
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

const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: 'transparent', // Transparent background
    padding: '30px 0px',
    marginBottom: '20px',
  },
  name: {
    fontWeight: 'bold', // Bold font
    color: '#333333', // Dark gray
    margin: '0', // Remove default margins
    fontSize: '2rem', // Adjust font size as needed
  },
  subtitle: {
    fontWeight: '300', // Thinner font
    color: '#71848b', // Light gray
    margin: '0', // Remove default margins
    fontSize: '1.2rem', // Adjust font size as needed
  },
};

export default App;
