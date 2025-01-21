import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Susan Steinberg Psychotherapist</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#cceef920',
    color: '#90a9b2',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: 'auto', // Ensures the footer stays at the bottom when content is short
  },
  footerText: {
    fontSize: '0.8em',
    color: '#90a9b2',
  }
};

export default Footer;
