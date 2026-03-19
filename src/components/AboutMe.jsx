import React from "react";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="home-section-container about-container">

      <div className="about-left">
        <img
          src="/katy.jpg"
          alt="Katy"
          className="about-image"
        />
      </div>

      <div className="about-right">
        <h2 className="about-title">Meet Katy</h2>

        <div className="about-text">
          <p>
Hello! I'm Katy and I began my career in data analysis and CRM, helping companies turn complex datasets into actionable insights. From managing multi-market CRM systems to leading testing strategies at H&M, I discovered a love for problem-solving and building efficient, tech-driven solutions.

          </p>

          <p>
That passion led me to full-stack development, where I now create web and mobile applications using React, React Native, Node.js, and MongoDB. I bring the same analytical mindset from my data background to coding, focusing on scalable, maintainable, and user-friendly solutions while continuing to learn and grow.
          </p>

          <p>

Outside of work, I’m a world traveller and language enthusiast. I’ve lived in five countries and visited over 50, and I love immersing myself in new cultures. If I'm not travelling or coding, you'll probably find me attached to my sewing machine, figuring out new and creative ways to bring fabric to life (either that, or I'm playing sudoku).
          </p>

          <p>
            Get in touch via my contact page or download my resume to learn more about my experience and projects. I’m always excited to connect with fellow developers, potential collaborators, or anyone interested in chatting about tech, travel, or sewing!
          </p>


          {/* Download CV button */}
          <a
            href="/Katarina_Grantham_CV.pdf"
            download
            className="download-cv-button"
          >
            Download My CV
          </a>
        </div>

      </div>

    </div>
  );
}