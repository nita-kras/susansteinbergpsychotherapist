import React from 'react';

const Welcome = () => {
  return (
    <div style={styles.welcome}>
      <h2>Welcome to Susan Steinberg Psychotherapy</h2>
      <p>Explore compassionate therapy services tailored to your needs.</p>
    </div>
  );
};

const styles = {
  welcome: {
    textAlign: 'center',
    padding: '40px 0',
  }
};

export default Welcome;
