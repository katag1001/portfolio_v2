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
  const [scrollProgress, setScrollProgress] = useState(0);

  const sectionsRef = useRef([]);
  const containerRef = useRef(null);

  // Scroll to a section smoothly
  const scrollToSection = (index) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Track scroll progress (0 → 1 for first section)
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (!container) return;

      const scrollTop = container.scrollTop;
      const sectionHeight = window.innerHeight;

      // Only animate during first section scroll
      const progress = Math.min(scrollTop / sectionHeight, 1);
      setScrollProgress(progress);
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

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

  // 🔥 Transform calculations
  const translateX = -40 * scrollProgress; // move left
  const translateY = -40 * scrollProgress; // move up
  const scale = 1 - 0.5 * scrollProgress; // shrink to 50%

  return (
    <div>
    {/* BUBBLE BACKGROUND */}
      <BubbleBackground numBubbles={22} minSize={12} maxSize={200} />
    <div className="home_container" ref={containerRef}>



      {/* SECTIONS */}
      {[

        /* HOME TITLE */
        <div
          key="home"
          className="home-section"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <div
            className="home_header_bubble"
            style={{
              transform: `
                translate(calc(-50% + ${translateX}vw), calc(-50% + ${translateY}vh))
                scale(${scale})
              `,
              position: "fixed",
              top: "50%",
              left: "50%",
            }}
          >
            <h1 className="home_title">KATY GRANTHAM</h1>
            <h2 className="home_subtitle">Full Stack Developer</h2>
          </div>

          <button
            className="scroll-arrow down"
            onClick={() => scrollToSection(1)}
          >
            <span className="theme-arrow down"></span>
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
            <span className="theme-arrow up"></span>
          </button>
          <button
            className="scroll-arrow down"
            onClick={() => scrollToSection(2)}
          >
            <span className="theme-arrow down"></span>
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
            <span className="theme-arrow up"></span>
          </button>
          <button
            className="scroll-arrow down"
            onClick={() => scrollToSection(3)}
          >
            <span className="theme-arrow down"></span>
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
            <span className="theme-arrow up"></span>
          </button>
          <button
            className="scroll-arrow down"
            onClick={() => scrollToSection(4)}
          >
            <span className="theme-arrow down"></span>
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
            <span className="theme-arrow up"></span>
          </button>
        </div>,
      ]}
    </div>
    </div>
  );
}