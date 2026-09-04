import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useHeaderEyebrow from "../hooks/useHeaderEyebrow";
import "./home.css";

export default function Home() {
  useHeaderEyebrow("01", "Portfolio");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page-section" id="home">
      <div
        className="home_header_bubble"
        style={{
          position: isMobile ? "absolute" : "fixed",
          bottom: isMobile ? "24%" : "16%",
          left: isMobile ? "50%" : "auto",
          right: isMobile ? "auto" : "6%",
          transform: isMobile ? "translateX(-50%)" : "none",
        }}
      >
        <div className="home_title_row">
          <h1 className="home_title">
            Katarina
            <br />
            Grantham
          </h1>

          <h2 className="home_subtitle">Full Stack <br /> Developer</h2>
        </div>
      </div>

      <nav className="home_links">
        <Link to="/projects" className="home_link">
          <span className="home_link-arrow">→</span> View my work
        </Link>
        <Link to="/about" className="home_link">
          <span className="home_link-arrow">→</span> Learn more about me
        </Link>
        <Link to="/game" className="home_link">
          <span className="home_link-arrow">→</span> Pop some bubbles
        </Link>
      </nav>
    </div>
  );
}
