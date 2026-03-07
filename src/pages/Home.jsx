import React, { useState, useEffect } from "react";
import ProjectGrid from "../components/ProjectGrid";
import ProjectCard from "../components/ProjectCard";
import BubbleBackground from "../components/BubbleBackground";
import "./Home.css";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
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

  return (
    <div className="home_container">

      <BubbleBackground
        numBubbles={22}
        minSize={12}
        maxSize={200}
      />

      {/* TITLE BUBBLE */}
      <div className={`home_header_bubble ${scrolled ? "scrolled" : ""}`}>
        <h1 className="home_title">Katarina Grantham</h1>
        <h2 className="home_subtitle">FULL STACK DEVELOPER</h2>
      </div>

      {/* PROJECTS */}
      <div className="home_projects">

        {selectedProject ? (
          <ProjectCard
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        ) : (
          <ProjectGrid
            projects={projects}
            onSelectProject={setSelectedProject}
          />
        )}

      </div>

    </div>
  );
}