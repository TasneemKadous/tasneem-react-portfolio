import './Home.css';
import personalImage from '../../assests/Profile.jpg';
import Experience from '../../components/Experience/Experience';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import EducationCerts from '../../components/EducationCerts/EducationCerts';
import CTA from '../../components/CTA/CTA';

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">

          <h1 className="hero-title">
            {t("home.hero.title")} <span>{t("home.hero.name")}</span>
          </h1>

          <h2 className="hero-subtitle">
            {t("home.hero.subtitle")}
          </h2>

          <p className="hero-text">
            {t("home.hero.text")}
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="btn primary">
              {t("home.hero.button")}
            </a>
          </div>

        </div>

        <div className="hero-image">
          <img src={personalImage} alt="Tasneem Kadous" />
        </div>

        <div className="scroll-indicator">
          <span>⌄</span>
        </div>
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <EducationCerts />
      </section>

      <CTA />

    </div>
  );
};

export default Home;