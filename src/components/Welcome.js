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
          <p>
            Change is never easy but with the right help you can make your journey not only easier but more rewarding. 
            I am a psychotherapist offering in-person and online therapy in London NW3. My approach has a relational-developmental psychodynamic core, that is integrated with EMDR for patients who have experienced trauma.
            
          </p>
          <p>I work with adults of all ages who are trying to cope with a myriad of issues:</p>
          <p>Relationships, Anxiety, Depression, Illness, ADHD, loss</p>
          <p>All trauma issues: Acute, Chronic, or Complex Trauma (PTSD) </p>
          <p>Long-term effects of growing up with mentally dysfunctional or unwell family...</p>
          <p>If you are considering psychotherapy/counselling, please email me sds48@icloud.com to arrange an initial phone conversation or visit..</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;