import { useState } from "react";
import "./Projects.css";

import cardlink1 from "../../assests/cardlink/1.png";
import cardlink2 from "../../assests/cardlink/2.png";
import cardlink3 from "../../assests/cardlink/3.png";
import cardlink4 from "../../assests/cardlink/4.png";
import cardlink5 from "../../assests/cardlink/5.png";

import akc1 from "../../assests/akc/1.mp4";
import akc2 from "../../assests/akc/2.mp4";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  const projects = [
    {
      title: "📄 My Resume",
      description:
        "This is my personal portfolio website built to present my professional experience, projects, and technical skills as a Fullstack Software Engineer. It demonstrates my ability to design and develop modern, responsive web applications using React and deploy them on cloud infrastructure. Check the Source Code on Github.",
      tech: ["React", "AWS", "JavaScript", "HTML", "CSS"],

      github: "https://github.com/TasneemKadous/akc-product-service", 

      details: [
        "Designed and developed a fully responsive personal portfolio using React.js with a modular component-based architecture.",
        "Implemented dynamic sections including Professional Experience, Featured Projects, Skills, and Education to present career journey in a structured way.",
        "Deployed the application on AWS cloud infrastructure ensuring scalability, availability, and production-ready hosting.",
        "Integrated GitHub repository for open-source access and version control to showcase clean code practices and development workflow.",
        "Focused on UI/UX design principles to create a clean, professional, and recruiter-friendly interface with smooth navigation and responsive layout across devices."
      ],
    },

    {
      title: "🛒 E-Commerce Platform",
      description:
        "E-commerce platform with product management, sizes/quantities, customer flow, and secure API architecture. It includes admin dashboard, inventory tracking, order processing, and scalable backend services designed for performance and reliability ensuring seamless user experience.",
      tech: ["Java Spring Boot", "React.js", "AWS", "PostgreSQL"],

      github: "https://github.com/TasneemKadous/akc-product-service", 

      media: {
        videos: [akc1, akc2],
      },

      details: [
        "Led the end-to-end development of a production-ready e-commerce platform using Java 17, Spring Boot, React.js, and PostgreSQL, serving customers and administrators.",
        "Implemented 20+ core modules including JWT-based authentication, guest checkout, shipment tracking, dynamic inventory management, role-based admin dashboards, and full order lifecycle handling.",
        "Designed scalable RESTful APIs following clean architecture principles with validation, structured logging, and global exception handling.",
        "Deployed on AWS using EC2, RDS (PostgreSQL), AWS Amplify, and Route 53 with secure networking, HTTPS configuration, and optimized cloud cost management.",
        "Delivered the complete system within 10 weeks using a milestone-driven development plan."
      ],
    },

    {
      title:
        "📇 Card-Link Solution",
      description:
        "A full system for generating digital business cards and scanning client cards using OCR and AI. It enables efficient contact management and CRM integration. It also includes real-time scanning, data validation, and export to contact systems with a user-friendly interface features app.",
      tech: ["Java Spring Boot", "React.js", "AWS", "PostgreSQL"],

      github: "", 

      media: {
        images: [cardlink1, cardlink2, cardlink3, cardlink4, cardlink5],
      },

      details: [
        "Designed and developed a microservices-based web application to automate customer data capture via QR-code digital business cards.",
        "Reduced manual data entry time by 70% and eliminated input errors through automated QR scanning and structured validation.",
        "Built secure backend services with Spring Boot and frontend with React.js, implementing role-based access control and REST APIs.",
        "Developed a centralized admin dashboard for monitoring sales users and managing customer records.",
        "Deployed on AWS with SSL certification and HTTPS, ensuring scalability, security, and production readiness with full unit test coverage."
      ],
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p className="project-desc">{p.description}</p>

            <div className="tech-list">
              {p.tech.map((t, index) => (
                <span key={index} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            <button
              className="project-link"
              onClick={() => setSelectedProject(p)}
            >
              View Project →
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
            <h2>{selectedProject.title}</h2>

            <p className="modal-desc">
              {selectedProject.description}
            </p>

            {/* GITHUB BUTTON */}
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                View on GitHub
              </a>
            )}

            {/* MEDIA */}
            {(selectedProject.media?.images?.length > 0 ||
              selectedProject.media?.videos?.length > 0) && (
              <div className="media-section">
                <h3>Project Media</h3>

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
              <h3>Project Details</h3>
              <ul>
                {selectedProject.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>

            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              Close
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
          <img src={zoomImage} alt="zoom" className="zoom-image" />
        </div>
      )}
    </section>
  );
};

export default Projects;