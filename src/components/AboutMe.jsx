import React from "react";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="home-section-container about-container">

      <div className="about-left">
        <img
          src="/src/assets/images/katy.jpg"
          alt="Katy"
          className="about-image"
        />
      </div>

      <div className="about-right">
        <h2 className="about-title">Meet Katy</h2>

        <div className="about-text">
          <p>
            Hello! I'm Katy, a passionate developer who enjoys building
            thoughtful, user-focused web experiences. I enjoy combining
            creativity with technical problem solving to build applications
            that are both functional and visually engaging.
          </p>

          <p>
            My interests include front-end development, modern JavaScript
            frameworks, and creating clean UI designs. I enjoy working with
            tools like React and building projects that demonstrate practical
            problem solving.
          </p>

          <p>
            Outside of development, I enjoy exploring new technologies,
            learning about design, and continuously improving my skills
            through personal projects and collaboration.
          </p>

          <p>
            I'm always excited to connect with other developers and work on
            interesting ideas that push my abilities further.
          </p>
        </div>

      </div>

    </div>
  );
}