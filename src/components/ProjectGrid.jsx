import React, { useState } from "react";
import "./projectGrid.css";
import { projects } from "../data/projects";
import useHeaderEyebrow from "../hooks/useHeaderEyebrow";

export default function ProjectGrid({ onSelectProject }) {
  useHeaderEyebrow("03", "Selected work");
  const [hovered, setHovered] = useState(projects[0]);

  return (
    <div className="home-section-container project-grid-container">

      <div className="project-grid-side">
        <span className="project-grid-vertical">Projects</span>
      </div>

      <div className="project-grid-preview">
        {hovered && (
          <img
            key={hovered.id}
            src={hovered.logo}
            alt={hovered.title}
            className="project-grid-preview-img"
          />
        )}
      </div>

      <div className="project-grid-list-wrap">
        <div className="project-grid-list-header">
          <h2>Work</h2>
          <span className="project-grid-list-count">{String(projects.length).padStart(2, "0")}</span>
        </div>

        <div className="project-grid-list-scroll">
          <div className="project-grid-list">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`project-grid-list-item ${hovered?.id === project.id ? "is-active" : ""}`}
                onMouseEnter={() => setHovered(project)}
                onFocus={() => setHovered(project)}
                onClick={() => onSelectProject(project)}
                tabIndex={0}
              >
                <span className="project-grid-list-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{project.title}</h3>
                <span className="project-grid-list-plus">+</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
