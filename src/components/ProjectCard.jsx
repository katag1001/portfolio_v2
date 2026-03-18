import React from "react";
import "./projectCard.css";
/*import ".././pages/home.css";*/

export default function ProjectCard({ project, onBack }) {
  return (
    <div className=" home-section-container project-card-container">

      <div className="project-card-header">
        <h2 className="project-card-title">{project.title}</h2>

        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
      </div>

      <img
        className="project-card-image"
        src={project.main}
        alt={project.title}
      />

      <div className="project-section">
        <h3>Overview</h3>
        <p>{project.overview}</p>
      </div>

      <div className="project-section">
        <h3>Technologies Used</h3>

        <div className="tech-grid">
          {project.technologies.map((tech, i) => (
            <div key={i} className="tech-item">
              {tech}
            </div>
          ))}
        </div>

      </div>

      <div className="project-section">
        <h3>Project Links</h3>

        <div className="links-grid">
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="project-link-btn"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>

    </div>
  );
}