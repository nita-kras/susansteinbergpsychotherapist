import React from 'react';

const PracticeDescription = () => {
  return (
    <div style={styles.section}>
      {/* Header */}
      <div style={styles.header}>Practice Description</div>

      {/* Additional Text Content */}
      <div style={styles.textContent}>
        <p>
          First and foremost, I endeavour to develop a trusting relationship that will form the basis for a therapeutic alliance. It can take a while to understand a patient in order to be effective and quite some time for most clients to feel safe with the therapist. Thus at the start I will listen carefully and from time to time ask questions. You will be free to say whatever comes to your mind and I may comment when something seems pertinent. I’m flexible and vary my practice to work most effectively with each person and employ a variety of techniques.
        </p>
        <p>
          I have experience working with a mixture of patients, from those who’ve been traumatised as a result of sexual abuse and dysfunctional childhoods, to those struggling with relationships, anxiety, depression, loss, illness, identity, and the issues of living in these complicated times.
        </p>
        <p>
          For people who have experienced trauma, I combine psychodynamic psychotherapy with EMDR. During each session of EMDR, I’ll work with the client to safely recall traumatic memories. Safety is paramount, and it is for that reason I don’t begin the EMDR process until the patient is ready and can tolerate recalling the memory. The primary goals during EMDR include: changing memory storage in order to process past, and present, traumatic events in order to prevent flashbacks and to work through the memories that overwhelm the mind into something they can tolerate or manage. Once memories are reprocessed, the patient can distinguish between what happened in the past and the present. It then affords the person with a choice to move on with their lives in a healthier way.
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
