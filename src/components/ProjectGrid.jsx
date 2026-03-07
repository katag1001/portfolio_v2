import React from "react";
import "./ProjectGrid.css";

export default function ProjectGrid({ projects, onSelectProject }) {

  return (
    <div className="project-grid-container">

      <h2 className="project-grid-title">Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-grid-item"
            onClick={() => onSelectProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}