import React from 'react';
import '../styles/pages.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Our AI Startup</h1>
        <p className="mission-statement">
          We're on a mission to revolutionize the way businesses interact with artificial intelligence.
        </p>
      </section>

      <section className="about-content">
        <div className="vision-section">
          <h2>Our Vision</h2>
          <p>
            To create accessible, powerful AI solutions that empower businesses
            and individuals to achieve their full potential.
          </p>
        </div>

        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h3>Leadership</h3>
              <p>
                Our leadership team brings together decades of experience in AI,
                machine learning, and business transformation.
              </p>
            </div>
            <div className="team-member">
              <h3>Engineers</h3>
              <p>
                World-class engineers and researchers working at the cutting edge
                of AI technology.
              </p>
            </div>
            <div className="team-member">
              <h3>Design</h3>
              <p>
                Creative minds ensuring our solutions are not just powerful,
                but intuitive and beautiful to use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
