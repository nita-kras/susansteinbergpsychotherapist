import React from 'react';

const About = () => {
  return (
    <div style={styles.section}>
      <div style={styles.header}>My Training</div>
      <div style={styles.textContent}>
        <p>
        I have had many years in training and experience in treating adults of all backgrounds and with a wide range of issues.
        </p>
        <p>
        I offer a quiet, safe, confidential space to talk about your feelings and concerns that brought you to seek therapy. 
        </p>
        <p>
        I trained at the Tavistock Clinic and hold a MSc in Psychodynamic psychotherapy which focuses on self-awareness and understanding of the influence of the past on present relationships. It helps people explore the present patterns in their behaviour and relationships and endeavours to find new approaches to manage and cope with all aspects of their life.
        </p>
        <p>
        After working, before and during Covid at the Trauma department at The Tavistock Clinic, I began exploring different ways of helping people with Trauma that were more efficacious and chose to train in EMDR, (eye movement desensitisation & reprocessing ). It is an evidence based model developed to treat patients with all trauma related issues including PTSD. 
        </p>
        <p>
        I am registered with the British Psychoanalytic Council (BPC), the British Association for Counselling and Psychotherapy (BACP) EMDR UK and am a member of the Tavistock Society of Psychotherapists (TSP). Prior to my career as a psychotherapist, I worked in the USA as a documentary filmmaker specialising in biographies.
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
