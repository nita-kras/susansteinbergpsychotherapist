import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}>Welcome</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/practice-description" style={styles.link}>Practice Description</Link></li>
        <li><Link to="/session-details" style={styles.link}>Session Details</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    background: '#cceef950',
    padding: '10px 0',
    marginBottom: '20px',
    textAlign: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    margin: '0',
    padding: '0',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    padding: '10px 20px',
    display: 'block'
  }
};

export default Navbar;
