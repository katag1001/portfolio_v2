import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import "./contactForm.css"; 

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mlgdqejq", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent! Thank you.");
        form.reset();
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch (err) {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <div className="home-section-container contact-section-container">
      <div className="contact-left">
        <h2 className="contact-left-title">Get in touch</h2>
        <h3 className="contact-left-subtitle">LET'S COLLABORATE</h3>
        <div className="links-grid"> 
          <a
            href="https://github.com/katag1001"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-btn"  
          >
            <FaGithub size={30} className="contact-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/katarina-grantham-1b54a45b/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-btn" 
          >
            <FaLinkedin size={30} className="contact-icon" />
          </a>
        </div>
      </div>

      <div className="divider"></div> 

      <div className="contact-right">


        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your email:
            <input type="email" name="email" required />
          </label>
          <label>
            Your message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
        {status && <p className="form-status">{status}</p>}
      </div>
    </div>
  );
}