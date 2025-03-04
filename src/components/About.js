import React from 'react';

const About = () => {
  return (
    <div style={styles.section}>
      {/* My Training Section */}
      <div style={styles.header}>My Training</div>
      <div style={styles.textContent}>
        <p>
          I have had many years in training and experience in treating adults from all backgrounds for a wide range of issues.
        </p>
        <p>
          I offer a quiet, safe, confidential space to talk about your feelings and concerns that brought you to seek therapy.
        </p>
        <p>
          I trained at the Tavistock Clinic and am an accredited psychodynamic therapist and hold a MSc in Psychodynamic psychotherapy which focuses on self-awareness and understanding of the influence of the past on the present.
        </p>
        <p>
          It helps people explore the present patterns in their behaviour and relationships and endeavours to find new approaches to manage and cope with all aspects of their life.
        </p>
        <p>
          After working, before and during Covid at the Trauma department at The Tavistock Clinic, I began exploring different ways of helping people with Trauma that were more efficacious and chose to train in EMDR, (eye movement desensitisation & reprocessing ).
        </p>
        <p>
          EMDR is an evidence-based model developed to treat patients with trauma-related issues, including PTSD. It is based on the AIP model (Adaptive Information Processing).
        </p>
      </div>
      
      {/* About Me Section */}
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
    </div>
  );
};

const styles = {
  section: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  header: {
    color: '#71848b',
    fontSize: '2rem',
    marginBottom: '10px',
    textAlign: 'center',
  },
  textContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'left',
    lineHeight: '1.6',
  },
};

export default About;
