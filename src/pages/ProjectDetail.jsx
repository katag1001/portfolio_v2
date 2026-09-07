import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = projects.findIndex((p) => String(p.id) === id);
  const project = index !== -1 ? projects[index] : null;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextProject = projects[(index + 1) % projects.length];

  return (
    <div className="page-section" id="project-detail">
      <ProjectCard
        project={project}
        onBack={() => navigate("/projects")}
        onNext={() => navigate(`/projects/${nextProject.id}`)}
        nextProject={nextProject}
      />
    </div>
  );
}
