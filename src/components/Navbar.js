import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li>
          <NavLink 
            to="/" 
            style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/practice-description" 
            style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            Practice Description
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/session-details" 
            style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            Session Details
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}
          >
            Contact
          </NavLink>
        </li>
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
    color: '#333',  // Default color
    textDecoration: 'none',
    padding: '10px 20px',
    display: 'block',
  },
  activeLink: {
    color: '#a6a6a6',  // Active link color (blue or any color you prefer)
  },
};

export default Navbar;
