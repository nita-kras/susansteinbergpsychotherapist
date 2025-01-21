import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Susan Steinberg Psychotherapist</p>
      <p style={styles.footerText}>Website Made by Nita Krasniqi</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#cceef950',
    color: '#333',
    padding: '20px 0',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '0.8em',
    color: '#90a9b2'
  }
};

export default Footer;
