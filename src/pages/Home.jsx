import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import ".././index.css";

import BubbleBackground from "../components/BubbleBackground";
import ContactForm from "../components/ContactForm";
import ProjectGrid from "../components/ProjectGrid";
import ProjectCard from "../components/ProjectCard";
import AboutMe from "../components/AboutMe";
import BubbleGameSection from "../components/BubbleGameSection";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionsRef = useRef([]);

  // Scroll to a section smoothly
  const scrollToSection = (index) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Bounce animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bounce");
            setTimeout(() => {
              entry.target.classList.remove("bounce");
            }, 600);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="home_container">

      {/* BUBBLE BACKGROUND */}
      <BubbleBackground numBubbles={22} minSize={12} maxSize={200} />

      {/* SECTIONS */}
      {[
        /* HOME TITLE */
        <div
          key="home"
          className="home-section"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <div className="home_header_bubble">
            <h1 className="home_title">KATY GRANTHAM</h1>
            <h2 className="home_subtitle">Full Stack Developer</h2>
            
          </div>
          <button
            className="scroll-arrow down"
            onClick={() => scrollToSection(1)}
          >
            <span class="theme-arrow down"></span>
          </button>
        </div>,

        /* PROJECTS */
        <div
          key="projects"
          className="home-section"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          {selectedProject ? (
            <ProjectCard
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          ) : (
            <ProjectGrid onSelectProject={setSelectedProject} />
          )}
          <button
            className="scroll-arrow up"
            onClick={() => scrollToSection(0)}
          >
            <span class="theme-arrow up"></span>
          </button>
          <button
            className="scroll-arrow down"
            onClick={() => scrollToSection(2)}
          >
            <span class="theme-arrow down"></span>
          </button>
        </div>,

        /* CONTACT */
        <div
          key="contact"
          className="home-section"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <ContactForm />
          <button
            className="scroll-arrow up"
            onClick={() => scrollToSection(1)}
          >
            <span class="theme-arrow up"></span>
          </button>
          <button
            className="scroll-arrow down"
            onClick={() => scrollToSection(3)}
          >
            <span class="theme-arrow down"></span>
          </button>
        </div>,

        /* ABOUT ME */
        <div
          key="about"
          className="home-section"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <AboutMe />
          <button
            className="scroll-arrow up"
            onClick={() => scrollToSection(2)}
          >
            <span class="theme-arrow up"></span>
          </button>
          <button
            className="scroll-arrow down"
            onClick={() => scrollToSection(4)}
          >
            <span class="theme-arrow down"></span>
          </button>
        </div>,

        /* BUBBLE GAME */
        <div
          key="game"
          className="home-section"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <BubbleGameSection />
          <button
            className="scroll-arrow up"
            onClick={() => scrollToSection(3)}
          >
            <span class="theme-arrow up"></span>
          </button>
        </div>,
      ]}
    </div>
  );
}