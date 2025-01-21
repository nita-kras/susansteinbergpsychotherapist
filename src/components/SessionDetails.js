import React from 'react';

const SessionDetails = () => {
  return (
    <div style={styles.section}>
      <h2>Session Details</h2>
      <p>Information about session length, pricing, and structure...</p>
    </div>
  );
};

const styles = {
  section: {
    textAlign: 'center',
    padding: '40px 0',
  }
};

export default SessionDetails;
