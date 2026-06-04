import "./Contact.css";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-wrapper-single">

      <h2>{t("contact.title")}</h2>

      <p>{t("contact.subtitle")}</p>

      <a
        href="https://calendly.com/tasneem_kadous/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="meeting-button"
      >
        {t("contact.button")}
      </a>

      <div className="social-section">
        <div className="social-icons">
          <a href="https://wa.me/4915511402715" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>

          <a href="https://www.instagram.com/tasneemkadous/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/in/tasneem-kadous/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:tasneem_kadous@outlook.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Contact;