import React from 'react';
import './About.css'; // Import the CSS file for styles

const About = () => {
  return (
    <div className="about">
      <div className="contentWrapper">
        {/* Image */}
        <div className="imageWrapper">
          <img
            src={`${process.env.PUBLIC_URL}/images/susansteinberg.jpg`}
            alt="Susan Steinberg"
            className="image"
          />
          <p className="registrationText">
            I am a Registered Member of the British Association for Counselling &amp;
            Psychotherapy (BACP), EMDR UK, British Psychoanalytic Council (BPC), and the
            Tavistock Society of Psychotherapists (TSP).
          </p>
        </div>

        {/* Text */}
        <div className="textContent">
          <div className="trainingHeader">My Training</div>
          <p>
            I trained at the Tavistock Clinic and hold an MSc in Psychodynamic
            psychotherapy, which focuses on self-awareness and understanding
            of the influence of the past on present behavior and relationships.
            It endeavours to help people learn to recognize patterns in their
            behavior and relationships and find new approaches to manage and
            cope with problems.
          </p>
          <p>
            Before and during Covid, I worked at the Trauma department at The Tavistock
            Clinic. I became very interested in patients with trauma and decided to train
            in a specific model developed in 1987 to deal with trauma, EMDR (Eye Movement
            Desensitisation &amp; Reprocessing). It is an evidence-based technique used to
            treat patients with acute, single-issue trauma, complex trauma (PTSD), and related
            disorders.
          </p>
          <p>
            During each session of EMDR, the therapist works with clients to safely recall
            traumatic memories. The primary goals during EMDR include: changing memory storage
            in order to process past and present traumatic events, in order to stop flashbacks
            and memories that overwhelm the mind and interrupt their life and the developmental
            process.
          </p>
          <p>
            Before training to be an adult psychotherapist, I had a professional career as
            a documentary filmmaker where I worked with people from all over the world.
            That experience made me particularly sensitive to the lives and struggles of
            people from diverse backgrounds. It also provided an understanding of
            people working in the arts who may have specific issues in devising ways to
            survive outside the boundaries of more conventional society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
