import React, { useState, useEffect, useRef } from "react"; 
import "./Home.css";
import ".././index.css";
import ".././App.css";


import BubbleBackground from "../components/BubbleBackground";
import ContactForm from "../components/ContactForm";
import ProjectGrid from "../components/ProjectGrid";
import ProjectCard from "../components/ProjectCard";
import AboutMe from "../components/AboutMe";
import BubbleGameSection from "../components/BubbleGameSection";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const sectionsRef = useRef([]);
  const containerRef = useRef(null);
  const bubbleRef = useRef(null);
  const scrollProgress = useRef(0);

  // Scroll to a section smoothly
  const scrollToSection = (index) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Update bubble transform 
  const updateBubbleTransform = () => {
    const progress = scrollProgress.current;

    const translateX = -41.5 * progress;
    const translateY = -40 * progress;
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
  }, []);

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
    <>
      {/* BUBBLE BACKGROUND  */}
      <BubbleBackground numBubbles={22} minSize={12} maxSize={200} />

      <div className="home_container" ref={containerRef}>

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
                position: "fixed",
                top: "50%",
                left: "50%",
              }}
            >
              <h1 className="home_title">Katy Grantham</h1>
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