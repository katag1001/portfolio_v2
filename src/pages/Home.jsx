import React, { useState, useEffect } from "react";
import "./Home.css";

import BubbleBackground from "../components/BubbleBackground";

import ContactForm from "../components/ContactForm";
import ProjectGrid from "../components/ProjectGrid";
import ProjectCard from "../components/ProjectCard";
import AboutMe from "../components/AboutMe";
import BubbleGameSection from "../components/BubbleGameSection";


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

  return (
    <div className="home_container">

      <BubbleBackground
        numBubbles={22}
        minSize={12}
        maxSize={200}
      />

      {/* TITLE BUBBLE */}
      <div className={`home_header_bubble ${scrolled ? "scrolled" : ""}`}>
        <h1 className="home_title">KATY GRANTHAM</h1>
        <h2 className="home_subtitle">Full Stack Developer</h2>
      </div>

      {/* PROJECTS */}
      <div className="home-sections">

        {selectedProject ? (
          <ProjectCard
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        ) : (
          <ProjectGrid
            onSelectProject={setSelectedProject}
          />
        )}

      </div>

      {/* CONTACT */}
      <div className="home-sections">
        <ContactForm />
      </div>

      {/* ABOUT ME */}
      <div className="home-sections">
        <AboutMe />
      </div>

      {/* BUBBLE GAME */}
      <div className="home-sections">
        <BubbleGameSection />
      </div>      

    </div>
  );
}