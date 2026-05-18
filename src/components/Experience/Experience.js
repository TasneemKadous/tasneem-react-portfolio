import { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const experiences = [
    {
      title:
        "Fullstack Software Engineer ( Java Spring Boot | React | PostgreSQL | AWS ) — MZ Creatives",

      period: "May 2024 – Present",

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

      details: [
        "Full-Stack Engineer responsible for requirements analysis, system architecture, UI/UX design, backend & frontend development, cloud deployment, testing, and production support.",

        "Developed an e-commerce solution and delivered a full-stack shopping website using Spring Boot (Java 17) and React.js with more than 200 features for end users and administrators, including guest checkout, shipment tracking, and product management.",

        "Implemented the entire system within a few weeks using a modular development schedule for RESTful APIs, session-based shopping cart functionality, and responsive admin dashboards.",

        "Developed “Card Link,” a CRM system designed to simplify customer data management, enabling sales representatives to scan and add customer information via QR codes — reducing data entry time by 70% and minimizing errors.",

        "Designed a microservices architecture using Java Spring Boot and React.js, deployed on AWS with HTTPS and SSL certification to ensure scalability, security, and high performance.",

        "Built a centralized admin dashboard for monitoring and managing all customer data entered by users.",

        "Automated the dynamic generation of business cards for registered users and integrated QR code scanning, supported by 95% test coverage through automated unit testing.",

        "You can explore detailed case studies and live demos in the Projects Section below. 🔎",
      ],
    },

    {
      title:
        "Software Application Engineer (Java Spring Boot | Angular | BigQuery | Integration ) — Valeo",

      period: "October 2022 – April 2024",

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

      details: [
        "Design and develop an in-house Java-based application architecture for the Valeo Group, impacting over 30,000 employees globally, and deliver low-level designs to optimize scalability and performance.",

        "Lead an audit automation project, reducing the process time by 90%, saving significant operational hours annually, and refactor legacy projects for a 30% performance boost.",

        "Develop secure APIs using Java Spring Boot and implement modernized web app interfaces by integrating AngularJS with JavaScript DOM scripting.",

        "Troubleshoot critical production issues, conduct unit testing with 95% code coverage, and collaborate in Agile Scrum teams to deliver high-quality, maintainable solutions.",
      ],
    },

    {
      title:
        "Solution Engineer (Java Spring Boot | React | Camunda | BPMN | Integration) — PentaB",

      period: "February 2022 – October 2022",

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

      details: [
        "Independently developed two high-impact projects for the army and police, delivering end-to-end solutions using Camunda for workflow modeling, Java for backend services, and ReactJs for form features, reducing manual processes by 70%.",

        "Contributed to two team-based projects, customizing and enhancing systems for clients, achieving a 30% improvement in operational efficiency through feature updates and system optimizations.",

        "Led client interactions by gathering requirements, demonstrating solutions, and integrating feedback to align software with specific business needs.",
      ],
    },

    {
      title:
        "Software Developer Intern (C# | MS Azure | Integration) — Crossworkers (CON-LINQ)",

      period: "July 2021 – September 2021",

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

      details: [
        "Optimized the fLex application for freight forwarding companies, automating data entry into the database, reducing manual input time by 80%.",

        "Played a key role in converting the entire system from .NET Entity Framework to .NET Core, enhancing application performance by 40% and scalability to support increased user demand.",
      ],
    },

    {
      title:
        "Software Developer Intern (Java | SQL | BPM | Integration) — Modern Telecom Systems Information Technology (MTS IT)",

      period: "August 2020 – September 2020",

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

      details: [
        "Created and integrated API interfaces using Business Process Maestro, improving system communication and reducing integration time by 60%",

        "Implemented an existing case study for Telecom Egypt, streamlining processes and contributing to a 25% improvement in operational efficiency.",
      ],
    },
  ];

  return (
    <section className="experience-section">
      <h2 className="section-title">Professional Experience</h2>

      <div className="accordion">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`accordion-item ${openIndex === index ? "open" : ""
              }`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion-header">
              <div>
                <h3>{exp.title}</h3>
                <p className="period">{exp.period}</p>
              </div>

              <span className="icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <div className="accordion-content">


                <ul>
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
                <div className="tech-stack">
                  <span className="tech-title">Tech Stack</span>

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