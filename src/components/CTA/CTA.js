import "./CTA.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">{t("cta.title")}</h2>

        <p className="cta-text">
          {t("cta.text")}
        </p>

        <Link to="/contact" className="cta-button">
          {t("cta.button")}
        </Link>
      </div>
    </section>
  );
};

export default CTA;