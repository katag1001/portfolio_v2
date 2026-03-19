import React from "react";
import "./sideNav.css";

export default function SideNav() {
  return (
    <nav className="side-nav">
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#game">Bubble Game</a>
    </nav>
  );
}