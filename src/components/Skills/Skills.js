import "./Skills.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      titleKey: "skills.concepts.title",
      skillsKey: "skills.concepts.items",
    },
    {
      titleKey: "skills.soft.title",
      skillsKey: "skills.soft.items",
    },
    {
      titleKey: "skills.languages.title",
      skillsKey: "skills.languages.items",
    },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">{t("skills.title")}</h2>

      <div className="skills-grid">
        {skillCategories.map((category, i) => (
          <div key={i} className="skills-card">
            <h3>{t(category.titleKey)}</h3>

            <ul>
              {t(category.skillsKey, { returnObjects: true }).map(
                (skill, index) => (
                  <li key={index}>{skill}</li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;