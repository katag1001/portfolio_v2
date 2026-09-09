import React from "react";
import { Link } from "react-router-dom";
import useHeaderEyebrow from "../hooks/useHeaderEyebrow";
import "./home.css";

export default function Home() {
  useHeaderEyebrow("01", "Portfolio");

  return (
    <div className="page-section" id="home">
      <div className="home_header_bubble">
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
          <span className="home_link-arrow">→</span> <span className="home_link-label">View my work</span>
        </Link>
        <Link to="/about" className="home_link">
          <span className="home_link-arrow">→</span> <span className="home_link-label">Learn more about me</span>
        </Link>
        <Link to="/game" className="home_link">
          <span className="home_link-arrow">→</span> <span className="home_link-label">Pop some bubbles</span>
        </Link>
      </nav>
    </div>
  );
}
