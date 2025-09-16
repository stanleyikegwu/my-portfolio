import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-links">
        <a href="https://github.com/stanleyikegwu" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fa-brands fa-github"></i>
          GitHub
        </a>
        <a href="mailto:ikegwustanley@gmail.com" className="contact-link">
          <i className="fa-solid fa-envelope"></i>
          Email
        </a>
        <a href="tel:+2347044774010" className="contact-link">
          <i className="fa-solid fa-phone"></i>
          Phone
        </a>
        <a href="https://linkedin.com/in/stanleyikegwu" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;