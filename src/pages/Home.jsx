import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import ".././index.css";
import ".././App.css";
import SideNav from '../components/Nav.jsx';
import BubbleBackground from "../components/BubbleBackground";
import ContactForm from "../components/ContactForm";
import ProjectGrid from "../components/ProjectGrid";
import ProjectCard from "../components/ProjectCard";
import AboutMe from "../components/AboutMe";
import BubbleGameSection from "../components/BubbleGameSection";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);
  const bubbleRef = useRef(null);
  const scrollProgress = useRef(0);

  // Detect screen size on load and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to a section smoothly
  const scrollToSection = (index) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Update bubble transformation (only on desktop)
  const updateBubbleTransform = () => {
    if (isMobile) return;

    const progress = scrollProgress.current;
    const translateX = 40 * progress;
    const translateY = -42 * progress;
    const scale = 1 - 0.5 * progress;

    if (bubbleRef.current) {
      bubbleRef.current.style.transform = `
        translate(calc(-50% + ${translateX}vw), calc(-50% + ${translateY}vh))
        scale(${scale})
      `;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    let ticking = false;

    const handleScroll = () => {
      if (!container) return;

      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = container.scrollTop;
          const sectionHeight = window.innerHeight;

          scrollProgress.current = Math.min(scrollTop / sectionHeight, 1);

          updateBubbleTransform(); 

          ticking = false;
        });

        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => container.removeEventListener("scroll", handleScroll);
  }, [isMobile]); 

  return (
    <>
      <BubbleBackground numBubbles={22} minSize={12} maxSize={200} />
      <div className="home_container" ref={containerRef}>
        <SideNav />
        {/* SECTIONS */}
        {[
          /* HOME TITLE */
          <div
            key="home"
            className="home-section"
            id="home"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <div
              ref={bubbleRef}
              className="home_header_bubble"
              id="home"
              style={{
                position: isMobile ? "absolute" : "fixed", 
                top: isMobile ? "10%" : "50%", 
                left: "50%",
                transform: isMobile ? "translateX(-50%)" : "translate(-50%, -50%)", 
              }}
            >
              <h1 className="home_title">Katarina Grantham</h1>
              <h2 className="home_subtitle">FULL STACK DEVELOPER</h2>
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
            id="projects"
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

          /* ABOUT ME */
          <div
            key="about"
            className="home-section"
            id="about"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <AboutMe />
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

          /* CONTACT */
          <div
            key="contact"
            className="home-section"
            id="contact"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <ContactForm />
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
            id="game"
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
    </>
  );
}