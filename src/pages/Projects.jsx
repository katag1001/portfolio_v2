import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectGrid from "../components/ProjectGrid";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="page-section" id="projects">
      <ProjectGrid
        onSelectProject={(project) => navigate(`/projects/${project.id}`)}
      />
    </div>
  );
}
