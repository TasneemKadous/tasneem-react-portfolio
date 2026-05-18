import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Header.css";


const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide header on scroll down
      } else {
        setIsVisible(true); // Show header on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isVisible ? "" : "hidden-header"}`}>
      <nav className="navbar">

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>


          <li><Link to="/#experience">Experience</Link></li>
          <li><Link to="/#projects">Projects</Link></li>
          <li><Link to="/#skills">Skills</Link></li>
          <li><Link to="/#education">Education</Link></li>
        </ul>
        <div className="icons">

          <a href="https://www.linkedin.com/in/tasneem-kadous/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
         
          <a href="https://www.instagram.com/tasneemkadous/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>

        </div>
      </nav>
    </header>
  );
};

export default Header;
