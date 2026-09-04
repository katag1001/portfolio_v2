import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="page-section" id="project-detail">
      <ProjectCard project={project} onBack={() => navigate("/projects")} />
    </div>
  );
}
