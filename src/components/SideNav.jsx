import React from "react";
import "./SideNav.css";

export default function SideNav() {
  return (
    <nav className="side-nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}