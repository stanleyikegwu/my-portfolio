import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          I'm a passionate full stack developer with expertise in JavaScript, React, 
          and modern web technologies. I love creating applications that are both functional 
          and beautiful, with a focus on user experience and performance.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies, contributing to 
          open source projects, or sharing my knowledge with the developer community.
        </p>
      </div>
      <div className="skills-container">
        <span className="skill-tag">JavaScript</span>
        <span className="skill-tag">React</span>
        <span className="skill-tag">HTML/CSS</span>
        <span className="skill-tag">Responsive Design</span>
      </div>
    </div>
  );
};

export default About;