import React from 'react';
import './footer.css';

const Footer = ({ footerText }) => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#privacy">Thank You!</a>
      </div>
      <p>{footerText}</p>
    </footer>
  );
}

export default Footer;
