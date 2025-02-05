import React from 'react';

const SessionDetails = () => {
  return (
    <div style={styles.section}>
      {/* Session Details Header */}
      <div style={styles.header}>Session Details</div>

      {/* Session Information Text */}
      <div style={styles.textContent}>
        <p>
          The first session will be a 1 hour assessment where I’ll endeavour to understand the issues that have brought you to seek therapy and to determine the best way forward.
        </p>
        <p>
          This will include your family background as well as a medical and mental health history.
        </p>
        <p>
          It will provide the client the opportunity to ask questions and to determine how they might feel about going forward.
        </p>
        <p>
          At the end of this session, if you choose to go forward, we will discuss schedules, the number of sessions you’d like to start with and fees. In effect, it will be the beginning of a therapeutic alliance.
        </p>
        <p>
          From then on we will meet weekly for 50 minutes face to face or on Zoom.
        </p>
      </div>

      <div style={styles.header}>About Me</div>
      <div style={styles.textContent}>
        <p>
          I’ve always been interested in how people think and how they became the person I meet.
        </p>
        <p>
          Before training to be an adult psychotherapist, I had a professional career as a documentary filmmaker where I met and worked with people from all over the world. 
        </p>
        <p>
          That experience made me particularly sensitive to the lives and struggles of people from various backgrounds. It also provided an understanding of people working in the arts who may have specific issues in devising ways to survive outside the boundaries of more conventional society and in finding their own voice.
        </p>
      </div>

      {/* Pricing & Availability Header */}
      <div style={styles.header}>Pricing & Availability</div>

      {/* Pricing Information Text */}
      <div style={styles.textContent}>
        <p>Sessions are priced from £80.00.</p>
        <p>I offer concessions under extenuating circumstances.</p>
        <p>I have no evening or weekend sessions available.</p>
        <p>Sessions can be held Face to Face or on Zoom.</p>
      </div>
    </div>
  );
};

const styles = {
  section: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  header: {
    color: '#71848b',  // Gray color for the header
    fontSize: '2rem',  // Same font size as "My Training"
    marginBottom: '10px',
    display: 'inline-block', // Align to the left, not centered
    textAlign: 'left',  // Align left for better structure
  },
  textContent: {
    maxWidth: '800px',  // Max width for readability
    margin: '0 auto',   // Center the text content
    textAlign: 'left',   // Align text to the left for a structured layout
    lineHeight: '1.6',   // Line height for easier reading
  },
};

export default SessionDetails;