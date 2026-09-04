import React from "react";
import "./projectCard.css";
import { FaGithub } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';
import useHeaderEyebrow from "../hooks/useHeaderEyebrow";

export default function ProjectCard({ project, onBack }) {
  useHeaderEyebrow(null, "Project");

  return (
    <div className={`home-section-container project-card-container ${project.type === 'mobile' ? 'mobile-card' : 'web-card'}`}>
      {/* Header section without conditional styling */}
      <div className="project-card-header">
        <div>
          <h2 className="card-title">{project.title}</h2>
        </div>
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
      </div>

      <div className="project-card-body">
        <div className="project-card-image-container">
          <img
            className="project-card-image"
            src={project.main}
            alt={project.title}
          />
        </div>

        <div className="project-card-details">
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
              {project.links.map((link, i) => {
                let IconComponent;

                if (link.label.toLowerCase() === 'github') {
                  IconComponent = FaGithub;
                } else if (link.label.toLowerCase() === 'site') {
                  IconComponent = CiGlobe;
                }

                return (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn"
                  >
                    {IconComponent ? <IconComponent size={40} /> : link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {project.qr && (
          <div className="project-section qr-section">
            <h3>Download App</h3>
            <div className="qr-container">
              <img src={project.qr} alt={`${project.title} QR code`} />
              <p>Scan to open the Play Store</p>
            </div>
          </div>
        )}


        </div>
      </div>
    </div>
  );
}