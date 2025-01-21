import React from 'react';

const Contact = () => {
  return (
    <div style={styles.contact}>
      <h2>Contact Us</h2>
      <p>Email: susan@example.com</p>
      <p>Phone: (123) 456-7890</p>
    </div>
  );
};

const styles = {
  contact: {
    textAlign: 'center',
    padding: '40px 0',
  }
};

export default Contact;
