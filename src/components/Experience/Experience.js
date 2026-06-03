import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Experience.css";

const Experience = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const experiences = [
    {
      key: "mz",
      techStack: [
        "Java 17",
        "Java 21",
        "Spring Boot",
        "React",
        "JavaScript",
        "DOM",
        "HTML",
        "CSS",
        "Bootstrap",
        "AJAX",
        "JSON",
        "RESTful APIs",
        "JUnit",
        "Mockito",
        "Git",
        "Linux",
        "RegEx",
        "Tailwind",
        "Swagger",
        "OpenAPI",
        "PostgreSQL",
        "AWS",
        "JPA",
        "Hibernate",
        "Docker",
        "Kubernetes",
        "AWS Cloud",
        "Microservices",
        "Eclipse",
        "Maven",
        "VS Code",
        "Postman",
        "Git Bash",
        "Sublime",
        "GitHub",
        "GitLab",
        "Tomcat",
        "AI (OCR)",
        "Adobe XD",
        "Figma",
      ],
    },

    {
      key: "valeo",
      techStack: [
        "Java 8",
        "Java 11",
        "Spring Boot",
        "Python",
        "AngularJS",
        "JavaScript",
        "DOM",
        "JQuery",
        "HTML",
        "CSS",
        "Bootstrap",
        "AJAX",
        "JSON",
        "XML",
        "SOAP",
        "RESTful APIs",
        "JUnit",
        "Mockito",
        "Gerrit",
        "Git",
        "Linux",
        "RegEx",
        "SVN",
        "Swagger",
        "DOORs",
        "BigQuery",
        "Eclipse",
        "Maven",
        "VS Code",
        "Postman",
        "Git Bash",
        "Jenkins",
        "IntelliJ",
        "JIRA",
        "Tomcat",
        "Microservices Architecture",
        "PyCharm",
      ],
    },

    {
      key: "pentab",
      techStack: [
        "Java 11",
        "Java 17",
        "Java 21",
        "Spring Boot",
        "React",
        "JavaScript",
        "TypeScript",
        "JQuery",
        "HTML",
        "CSS",
        "Bootstrap",
        "AJAX",
        "JSON",
        "RESTful APIs",
        "Git",
        "Linux",
        "RegEx",
        "Bitbucket",
        "Keycloak",
        "PostgreSQL",
        "AWS",
        "Maven",
        "VS Code",
        "Postman",
        "Git Bash",
        "GitHub",
        "JIRA",
        "Camunda",
        "Tomcat",
        "BPMN",
      ],
    },

    {
      key: "crossworkers",
      techStack: [
        "C#",
        ".NET",
        "JavaScript",
        "HTML",
        "CSS",
        "JSON",
        "XML",
        "RESTful APIs",
        "JUnit",
        "Git",
        "RegEx",
        "MS SQL Server",
        "Visual Studio",
        "Git Bash",
        "MS Azure",
        "Tomcat",
      ],
    },

    {
      key: "mts",
      techStack: [
        "Java",
        "Spring Boot",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "AJAX",
        "JSON",
        "XML",
        "SOAP",
        "RESTful APIs",
        "BPM",
        "Oracle SQL",
        "PL/SQL",
        "Git Bash",
        "SQL Developer",
        "GitHub",
        "Tomcat",
      ],
    },
  ];

  return (
    <section className="experience-section">
      <h2 className="section-title">
        {t("experience.sectionTitle")}
      </h2>

      <div className="accordion">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`accordion-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion-header">
              <div>
                <h3>{t(`experience.${exp.key}.title`)}</h3>

                <p className="period">
                  {t(`experience.${exp.key}.period`)}
                </p>
              </div>

              <span className="icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div className="accordion-content">
                <ul>
                  {t(`experience.${exp.key}.details`, {
                    returnObjects: true,
                  }).map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                <div className="tech-stack">
                  <span className="tech-title">
                    {t("experience.techStack")}
                  </span>

                  <div className="tech-tags">
                    {exp.techStack.map((tech, i) => (
                      <span key={i} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;