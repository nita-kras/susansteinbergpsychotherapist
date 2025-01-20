import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <img 
        src="https://via.placeholder.com/150" 
        alt="Susan Steinberg" 
        style={styles.image} 
      />
      <h1>Susan Steinberg Psychotherapist</h1>
    </header>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    padding: '20px',
  },
  image: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
  }
};

export default Header;
