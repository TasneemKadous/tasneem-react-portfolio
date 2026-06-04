import "./About.css";
import { useTranslation } from "react-i18next";

import personalImage from "../../assests/about.jpg";
import swingImage from "../../assests/swing.jpg";
import modellingImage from "../../assests/modelling.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <div className="section">
        <img src={personalImage} alt="Tasneem Kadous Image" className="about-image" />

        <div className="text-content">
          <h2>{t("about.name")}</h2>

          <p>{t("about.intro.p1")}</p>
          <p>{t("about.intro.p2")}</p>
          <p>{t("about.intro.p3")}</p>
          <p>{t("about.intro.p4")}</p>
        </div>
      </div>

      <div className="section reverse">
        <img src={swingImage} alt="Swing Dance Image" className="about-image" />

        <div className="text-content">
          <h2>{t("about.hobbies.title")}</h2>

          <p>{t("about.hobbies.p1")}</p>
          <p>{t("about.hobbies.p2")}</p>
        </div>
      </div>

      <div className="section">
        <img src={modellingImage} alt="Fashion Model Image" className="about-image" />

        <div className="text-content">
          <h2>{t("about.creative.title")}</h2>

          <p>{t("about.creative.p1")}</p>
          <p>{t("about.creative.p2")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;