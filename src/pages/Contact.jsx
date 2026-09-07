import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="page-section" id="contact">
      <ContactForm />
      <div className="contact-direct">
        <p className="contact-direct-text">
          Email me directly: <a href="mailto:katarinag1001@gmail.com" className="contact-direct-link">katarinag1001@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
