import React from 'react';
import './About.css'; // Import the CSS for styling

const Welcome = () => {
  return (
    <div className="about">
      <div className="contentWrapper">
        {/* Image Section */}
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
        
        {/* Text Section */}
        <div className="textContent">
          <div className="trainingHeader">Welcome</div>
          <p className="paragraphSpacing">
            Change is never easy but with the right help you can make your journey not only easier but more rewarding.
          </p>
          <p className="paragraphSpacing">
            I am a psychotherapist offering in-person and online therapy in North West London in a peaceful garden setting.
          </p>
          <p className="paragraphSpacing">
            My approach has a relational-developmental psychodynamic core, that is integrated with EMDR for patients who have experienced trauma and related issues.
          </p>
          <p className="paragraphSpacing">
            I work with adults of all ages who are trying to cope with a myriad of life’s problems:
          </p>
          <p className="paragraphSpacing">Relationships, Anxiety, ADHD, Family, Illness, Loss, Depression to finding your identity.</p>
          <p className="paragraphSpacing">Trauma Issues: Acute, Chronic, or Complex Trauma (PTSD)</p>
          <p className="paragraphSpacing">Long-term effects of growing up with mentally dysfunctional or unwell parents</p>
          <p className="paragraphSpacing">
            If you are considering psychotherapy, please email me sds48@icloud.com to arrange an initial phone conversation.
          </p>
          <p>Visit my website for further information{' '}
            <a href="https://www.susansteinbergpsychotherapist.com" target="_blank" rel="noopener noreferrer">
              www.susansteinbergpsychotherapist.com
            </a></p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;