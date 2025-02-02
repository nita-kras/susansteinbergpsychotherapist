import React from 'react';

const PracticeDescription = () => {
  return (
    <div style={styles.section}>
      {/* Header */}
      <div style={styles.header}>Practice Description</div>

      {/* Additional Text Content */}
      <div style={styles.textContent}>
        <p>
        First and foremost, I endeavour to develop a trusting relationship that will form the basis for a therapeutic alliance.
        </p>
        <p>
        Therapy is so personal that I prefer to meet face to face, especially at the start, as it gives each of us an opportunity to see what it feels like to be in a room together. If that’s geographically not possible, I’m happy to work on Zoom.
        </p>
        <p>
        It can take a while to understand a patient’s issues and quite some time for most clients to feel safe with the therapist. 
        </p>
        <p>
        I will listen to you carefully and from time to time ask questions. You will be free to say whatever comes to your mind and I may comment when something seems pertinent. 
        </p>
        <p>
        I’m flexible and vary my practice to work most effectively with each person and employ the most constructive way to help them.
        </p>
        <p>
        I have experience working with a mixture of patients from those who have trauma issues including mental and sexual abuse, PTSD and dysfunctional childhoods, to those struggling with relationships, anxiety, ADHD, finding your identity, loss, illness, addiction, and the issues of living in these complicated times.
        </p>
        <p>
        For clients with trauma-related issues, I integrate EMDR with psychodynamic talk therapy. 
        </p>
        <p>
        Clients with trauma are afflicted by disturbing symptoms that arise from unprocessed traumatic memories. The EMDR model of bilateral stimulation (eye movements) facilitates the processing of the maladaptive memories that overwhelm the mind and can interrupt a person's life and the developmental process.
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
    textAlign: 'center',  // Centered for better structure
  },
  textContent: {
    maxWidth: '800px',  // Max width for readability
    margin: '0 auto',   // Center the text content
    textAlign: 'left',   // Align text to the left for a structured layout
    lineHeight: '1.6',   // Line height for easier reading
  },
};

export default PracticeDescription;
