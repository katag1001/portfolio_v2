import React from "react";
import useHeaderEyebrow from "../hooks/useHeaderEyebrow";
import "./aboutMe.css";

export default function AboutMe() {
  useHeaderEyebrow("02", "About");

  return (
    <div className="home-section-container about-container">

      <div className="about-right">
        <h2 className="about-title">Meet Katy</h2>

        <div className="about-text">

<p>Hi, I'm Katy and I’m a full stack developer 👋. </p>
<p>I’m a lifelong learner and lover of knowledge.</p>
<p>After several years working in data analysis with SQL and Python, I caught the coding bug (pun intended). I’ve always been someone who loves getting stuck into a problem and am able to hyper-focus for hours when there’s a solution to be found. I’m at my happiest when I’m building, improving, and making sense of something challenging.</p>
<p>Right now, I’m obsessed with building my wardrobe pairing app, Wearable, which you can check out in my projects above. I wanted to crack the secret of what makes an outfit look good and build that into an algorithm. I also wanted to solve the age-old problem of having a wardrobe full of clothes and nothing to wear, so that when someone uses my app, they’re simply given the perfect option based on the weather, their existing wardrobe, and what they haven’t worn recently.</p>
<p>And when I’m not coding, you’ll usually find me sat at (and sometimes sewn into) my sewing machine, solving problems in a different way. I love the engineering behind constructing a garment and how you can mathematically transform a flat piece of fabric into a three-dimensional object that fits and moves with the human body.</p>
<p>If you want to know more, feel free to get in touch below or download my CV. Looking forward to hearing from you!</p>


          {/* Download CV button */}
          <a
            href="/Katarina_Grantham_CV.pdf"
            download
            className="editorial-btn download-cv-button"
          >
            Download my CV
          </a>
        </div>

      </div>

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