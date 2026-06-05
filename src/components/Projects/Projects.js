import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";

import cardlink1 from "../../assests/cardlink/1.png";
import cardlink2 from "../../assests/cardlink/2.png";
import cardlink3 from "../../assests/cardlink/3.png";
import cardlink4 from "../../assests/cardlink/4.png";
import cardlink5 from "../../assests/cardlink/5.png";

import akc1 from "../../assests/videos/1.mp4";
import akc2 from "../../assests/videos/2.mp4";
import akc3 from "../../assests/videos/3.mp4";
import akc4 from "../../assests/videos/4.mp4";
import akc5 from "../../assests/videos/5.mp4";
import akc6 from "../../assests/videos/6.mp4";
import akc7 from "../../assests/videos/7.mp4";

const Projects = () => {
  const { t } = useTranslation();

  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  const projects = [
    {
      key: "resume",
      tech: ["React", "AWS", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/TasneemKadous/tasneem-react-portfolio",
    },

    {
      key: "ecommerce",
      tech: ["Java Spring Boot", "React.js", "AWS", "PostgreSQL"],
      github: "https://github.com/TasneemKadous/akc-product-service",

      media: {
        videos: [akc1, akc2, akc3, akc4, akc5, akc6, akc7],
      },
    },

    {
      key: "cardlink",
      tech: ["Java Spring Boot", "React.js", "AWS", "PostgreSQL"],
      github: "",

      media: {
        images: [cardlink1, cardlink2, cardlink3, cardlink4, cardlink5],
      },
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">
        {t("projects.sectionTitle")}
      </h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{t(`projects.${p.key}.title`)}</h3>

            <p className="project-desc">
              {t(`projects.${p.key}.description`)}
            </p>

            <div className="tech-list">
              {p.tech.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <button
              className="project-link"
              onClick={() => setSelectedProject(p)}
            >
              {t("projects.viewProject")} →
            </button>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>
              {t(`projects.${selectedProject.key}.title`)}
            </h2>

            <p className="modal-desc">
              {t(`projects.${selectedProject.key}.description`)}
            </p>

            {/* GITHUB BUTTON */}
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                {t("projects.viewGithub")}
              </a>
            )}

            {/* MEDIA */}
            {(selectedProject.media?.images?.length > 0 ||
              selectedProject.media?.videos?.length > 0) && (
              <div className="media-section">
                <h3>{t("projects.media")}</h3>

                {selectedProject.media?.images?.length > 0 && (
                  <div className="media-grid">
                    {selectedProject.media.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="project"
                        className="zoom-img"
                        onClick={() => setZoomImage(img)}
                      />
                    ))}
                  </div>
                )}

                {selectedProject.media?.videos?.length > 0 && (
                  <div className="media-grid">
                    {selectedProject.media.videos.map((vid, i) => (
                      <video key={i} controls>
                        <source src={vid} type="video/mp4" />
                      </video>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* DETAILS */}
            <div className="details-section">
              <h3>{t("projects.details")}</h3>

              <ul>
                {t(
                  `projects.${selectedProject.key}.details`,
                  { returnObjects: true }
                ).map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>

            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              {t("projects.close")}
            </button>
          </div>
        </div>
      )}

      {/* ================= IMAGE ZOOM ================= */}
      {zoomImage && (
        <div
          className="zoom-overlay"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="zoom"
            className="zoom-image"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;