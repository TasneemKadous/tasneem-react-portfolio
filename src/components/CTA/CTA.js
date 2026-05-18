import "./CTA.css";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Let’s Work Together</h2>
        <p className="cta-text">
          Whether you’re looking to build a full-stack application, cloud architecture, 
          or AI-powered solutions — I’m ready to bring your ideas to life with modern, scalable, 
          and efficient engineering practices.
        </p>

        <Link to="/contact" className="cta-button">
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default CTA;
