import React from "react";
import "./projectGrid.css";

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    overview: "A personal portfolio website showcasing projects.",
    technologies: ["React", "CSS", "Vite"],
    links: [
      { label: "GitHub", url: "https://github.com/example" },
      { label: "Live Site", url: "https://example.com" }
    ]
  },
  {
    id: 2,
    title: "Task Manager",
    image: "/images/taskmanager.png",
    overview: "A task management web application.",
    technologies: ["React", "Node.js", "MongoDB"],
    links: [{ label: "GitHub", url: "https://github.com/example" }]
  }
];

export default function ProjectGrid({ onSelectProject }) {
  return (
    <div className="home-section-container project-grid-container">

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