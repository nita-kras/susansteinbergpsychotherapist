import React from 'react';

const About = () => {
  return (
    <div style={styles.about}>
      <h2>About Susan Steinberg</h2>
      <img 
  src={`${process.env.PUBLIC_URL}/images/susansteinberg.jpg`}  // Correct path relative to the public folder
  alt="Susan Steinberg"
  style={styles.image} 
/>

      <p>Professional and compassionate psychotherapy...</p>
    </div>
  );
};

const styles = {
  about: {
    textAlign: 'center',
    padding: '40px 0',
  },
  image: {
    maxWidth: '250px', // Sets the maximum width to 250px
    height: 'auto',    // Maintains the aspect ratio
    borderRadius: '0%',
    marginTop: '20px',
  }
};

export default About;
