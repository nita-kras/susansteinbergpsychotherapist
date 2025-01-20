import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Susan Steinberg Psychotherapist</p>
      <p>Website Made By Nita Krasniqi</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    bottom: '0',
  }
};

export default Footer;
