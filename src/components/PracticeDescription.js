import React from 'react';

const PracticeDescription = () => {
  return (
    <div style={styles.section}>
      {/* Header */}
      <div style={styles.header}>Practice Description</div>

      {/* Additional Text Content */}
      <div style={styles.textContent}>
        <p>
        First and foremost, I endeavour to develop a trusting relationship that will form the basis for a therapeutic alliance. It can take a while to understand a patient’s issues and quite some time for most clients to feel safe with the therapist. I will listen carefully and from time to time ask questions. You will be free to say whatever comes to your mind and I may comment when somethings seems pertinent. I’m flexible and vary my practice to work most effectively with each person and employ the most constructive way to help them. 
        </p>
        <p>
        I have experience working with a mixture of patients from those who have  trauma issues including mental and sexual abuse, PTSD and dysfunctional childhoods, to those struggling with relationships, anxiety, ADHD, depression, loss, illness, identity, and the issues of living in these complicated times.
        </p>
        <p>
        For clients with trauma related issues, I integrate with EMDR, which is based on the AIP Model (Adaptive Information Processing ) with psychodynamic talk therapy. Clients with Trauma are afflicted by disturbing symptoms that arise from unprocessed traumatic memories. The EMDR model of bilateral stimulation (like eye movements) facilitates the processing of the maladaptive memories that overwhelm the mind and often interrupt a person's life and the developmental process.
        </p>
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

export default PracticeDescription;
