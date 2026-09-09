import React from "react";
import useHeaderEyebrow from "../hooks/useHeaderEyebrow";
import "./aboutMe.css";

export default function AboutMe() {
  useHeaderEyebrow("02", "About");

  return (
    <div className="about-container">

      {/* Text / Content */}
      <div className="about-right">
        <h2 className="about-title">About</h2>

        <div className="about-divider" />

        <div className="about-text">
          <p>Hi, I’m Katy and I’m a full stack developer.</p> 

        <p>I work primarily with the MERN stack but I’m a lifelong learner and lover of knowledge. 
          I'm passionate about making things and fixing things. Outside of work, you’ll usually 
          find me at (and sometimes sewn into) my sewing machine. I always need to be engineering 
          something, whether that's a web app or a piece of clothing, I just love to figure out 
          how things are made and solve problems. I've lived all over the world collect 
          languages (both human and computer) like they're pokemon.</p>

          <a
            href="/Katarina_Grantham_CV.pdf"
            download
            className="download-cv-button"
          >
            <span className="download-cv-button-arrow">→</span>
            <span className="download-cv-button-label">Download my CV</span>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="about-left">
        <img
          src="/katy.jpg"
          alt="Katy"
          className="about-image"
        />
      </div>

    </div>
  );
}