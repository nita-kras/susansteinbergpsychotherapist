import React from 'react';

const Welcome = () => {
  return (
    <div style={styles.welcome}>
      <div style={styles.description}>
        <p>
          Change is never easy, but with the right help, you can make your journey easier. 
          My approach has a relational-developmental psychodynamic core, integrated with 
          EMDR for patients who have experienced trauma.
        </p>
        <p>I work with adults of all ages who are trying to cope with a myriad of issues:</p>
        <p style={styles.line}>Relationships, Anxiety, Depression, Illness</p>
        <p style={styles.line}>Acute, Chronic, or Complex Trauma (PTSD)</p>
        <p style={styles.line}>Long-term effects of growing up with mentally dysfunctional or unwell parents</p>
      </div>
    </div>
  );
};

const styles = {
  welcome: {
    textAlign: 'center',
    padding: '40px 0',
  },
  description: {
    marginTop: '20px',
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.4',  // Smaller line spacing between paragraphs
  },
  line: {
    marginTop: '5px',  // Reduced margin between lines
    fontSize: '1rem',  // Match the font size to the original
    lineHeight: '1.4',  // Same line height for consistent spacing
  },
};

export default Welcome;
