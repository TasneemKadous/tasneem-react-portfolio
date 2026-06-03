import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { i18n } = useTranslation();

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

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
          <button
            className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>

          <button
            className={`lang-btn ${i18n.language === "de" ? "active" : ""}`}
            onClick={() => changeLanguage("de")}
          >
            DE
          </button>

          <a
            href="https://www.linkedin.com/in/tasneem-kadous/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/tasneemkadous/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;