import React from 'react';
import profileImage from '../assets/profile.jpg';

const Header = () => {
  return (
    <div className="hero-section">
      <img
        src={profileImage} // Use the imported image
        alt="Ikegwu Stanley"
        className="profile-img"
      />
      <h1 className="hero-title">Ikegwu Stanley</h1>
      <p className="hero-subtitle">
        Full Stack Developer passionate about creating interactive 
        and responsive web applications with exceptional user experiences.
      </p>
    </div>
  );
};

export default Header;