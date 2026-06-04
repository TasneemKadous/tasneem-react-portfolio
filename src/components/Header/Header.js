import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import enFlag from "../../assests/enFlag.png";
import deFlag from "../../assests/deFlag.png";
import "./Header.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const { i18n } = useTranslation();

  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
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

          {/* Language Dropdown */}
          <div className="lang-dropdown">
            <button
              className="lang-selected"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <img
                src={i18n.language === "de" ? deFlag : enFlag}
                alt="flag"
                className="flag-icon"
              />
              {i18n.language === "de" ? "DE" : "EN"}
            </button>

            {isLangOpen && (
              <div className="lang-menu">
                <button onClick={() => changeLanguage("en")}>
                  <img src={enFlag} alt="English" className="flag-icon" />
                  EN
                </button>

                <button onClick={() => changeLanguage("de")}>
                  <img src={deFlag} alt="Deutsch" className="flag-icon" />
                  DE
                </button>
              </div>
            )}
          </div>

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