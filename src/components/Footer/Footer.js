import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">{t("footer.home")}</Link>
        <Link to="/about">{t("footer.about")}</Link>
        <Link to="/contact">{t("footer.contact")}</Link>
        <Link to="/faqs">{t("footer.faqs")}</Link>
      </div>

      <p>
        ©2026 {t("footer.rights")} | {t("footer.poweredBy")}{" "}
        <a
          href="https://www.linkedin.com/in/tasneem-kadous/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Tasneem Kadous
        </a>
      </p>
    </footer>
  );
};

export default Footer;