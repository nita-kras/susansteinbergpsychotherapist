import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome'; 
import About from './components/About';
import PracticeDescription from './components/PracticeDescription';
import SessionDetails from './components/SessionDetails';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router basename="/susansteinbergpsychotherapist"> {/* Correct base path */}
      <div style={styles.appContainer}>
        <header style={styles.header}>
          <h1 style={styles.name}>Susan Steinberg</h1>
          <p style={styles.subtitle}>Psychotherapist</p>
        </header>
        <Navbar />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Welcome />} /> {/* Default route */}
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
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    padding: '30px 0px',
    marginBottom: '20px',
  },
  name: {
    color: '#333333',
    margin: '0',
    fontSize: '2rem',
  },
  subtitle: {
    fontWeight: '300',
    color: '#71848b',
    margin: '0',
    fontSize: '1.2rem',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default App;
