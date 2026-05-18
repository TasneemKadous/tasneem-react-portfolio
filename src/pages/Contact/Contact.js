import "./Contact.css";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-wrapper-single">



      <h2>Book an Initial Interview</h2>
      <p>If you are a recruiter or company representative, you can schedule a short introduction call directly.</p>

      <a
        href="https://calendly.com/tasneem_kadous/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="meeting-button"
      >
        Reserve Interview Slot
      </a>

      <div className="social-section">
      
        <div className="social-icons">
          <a href="https://wa.me/4915511402715" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/tasneemkadous/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/tasneem-kadous/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:tasneem_kadous@outlook.com">
            <FaEnvelope />
          </a>
        </div>
      </div>




    </div>
  );
};

export default Contact;
