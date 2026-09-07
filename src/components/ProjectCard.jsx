import React from "react";
import "./projectCard.css";
import { FaGithub } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';
import useHeaderEyebrow from "../hooks/useHeaderEyebrow";

export default function ProjectCard({ project, onBack }) {
  useHeaderEyebrow(null, "Project");

  const renderLinks = () =>
    project.links.map((link, i) => {
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
          {IconComponent ? <IconComponent size={20} /> : link.label}
        </a>
      );
    });

  return (
    <div className={`project-card-container ${project.type === 'mobile' ? 'mobile-card' : 'web-card'}`}>
      <div className="project-card-hero">
        <img
          className="project-card-hero-image"
          src={project.main}
          alt={project.title}
        />
      </div>

      <div className="project-card-header">
        <h2 className="card-title">{project.title}</h2>
        <button className="project-back-link" onClick={onBack}>
          <span className="project-back-arrow">←</span> Back
        </button>
      </div>

      <div className="project-info">
        <dl className="project-meta">
          <div className="meta-row">
            <dt>Category</dt>
            <dd>{project.category}</dd>
          </div>
          <div className="meta-row">
            <dt>Team</dt>
            <dd>{project.team}</dd>
          </div>
          <div className="meta-row">
            <dt>Client</dt>
            <dd>{project.client}</dd>
          </div>
          <div className="meta-row">
            <dt>Tech</dt>
            <dd>{project.technologies.join(", ")}</dd>
          </div>
          <div className="meta-row">
            <dt>Links</dt>
            <dd className="meta-links">{renderLinks()}</dd>
          </div>
        </dl>

        <div className="project-description">
          <h3>Overview</h3>
          <p>{project.overview}</p>
        </div>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className={`project-gallery ${project.type === 'mobile' ? 'gallery-mobile' : 'gallery-web'}`}>
          {project.gallery.map((item, i) => (
            <div className="gallery-item" key={i}>
              <h4 className="gallery-title">{item.title}</h4>
              <img className="gallery-image" src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      )}

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
  );
}
