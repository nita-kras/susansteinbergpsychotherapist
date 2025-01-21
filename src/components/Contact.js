import React from 'react';

const Contact = () => {
  return (
    <div style={styles.contact}>
      {/* Contact Header */}
      <div style={styles.header}>Contact</div>

      {/* Contact Information */}
      <p>email: sds48@icloud.com</p>
    </div>
  );
};

const styles = {
  contact: {
    textAlign: 'center',
    padding: '40px 0',
  },
  header: {
    color: '#71848b',  // Gray color for the header
    fontSize: '2rem',  // Same font size as "My Training"
    marginBottom: '10px',
    display: 'inline-block', // Align to the left, not centered
    textAlign: 'left',  // Align left for better structure
  },
};

export default Contact;
