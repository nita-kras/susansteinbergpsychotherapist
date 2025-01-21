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
        <ul style={styles.list}>
          <li>Relationships, Anxiety, Depression, Illness</li>
          <li>Acute, Chronic, or Complex Trauma (PTSD)</li>
          <li>
            Long-term effects of growing up with mentally dysfunctional or unwell parents
          </li>
        </ul>
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
    lineHeight: '1.6',
  },
  list: {
    marginTop: '10px',
    paddingLeft: '20px',
  },
};

export default Welcome;
