import React from "react";
import "./Footer.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Me</Link>
        <Link to="/faqs">FAQs</Link>
      </div>
      <p>
        ©2026 All rights reserved | Powered by{""}
        <a href="https://www.linkedin.com/in/tasneem-kadous/" target="_blank" rel="noopener noreferrer" className="footer-link">
          Tasneem Kadous
        </a>
      </p>
    </footer>
  );
};

export default Footer;
