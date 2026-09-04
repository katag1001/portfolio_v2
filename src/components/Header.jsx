import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../routes";
import { useHeaderEyebrowContext } from "../context/HeaderEyebrowContext";
import "./header.css";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.5" />
      <line x1="12" y1="1.5" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22.5" />
      <line x1="1.5" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22.5" y2="12" />
      <line x1="4.4" y1="4.4" x2="6.2" y2="6.2" />
      <line x1="17.8" y1="17.8" x2="19.6" y2="19.6" />
      <line x1="4.4" y1="19.6" x2="6.2" y2="17.8" />
      <line x1="17.8" y1="6.2" x2="19.6" y2="4.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.5 14.6c-1 0.4-2 0.6-3 0.6-5 0-9-4-9-9 0-1.7 0.5-3.3 1.3-4.6C5.4 2.8 2 6.9 2 11.8 2 17.4 6.6 22 12.2 22c4.9 0 9-3.4 10.2-8-0.6 0.3-1.2 0.5-1.9 0.6z" />
    </svg>
  );
}

export default function Header() {
  const { eyebrow } = useHeaderEyebrowContext();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <>
      <header className="site-header">
        {eyebrow ? (
          <span className="header-eyebrow">
            {eyebrow.index && <span className="header-eyebrow-index">{eyebrow.index}</span>}
            {eyebrow.label}
          </span>
        ) : (
          <span />
        )}

        <div className="header-actions">
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>

          <button
            type="button"
            className={"icon-button burger-button" + (menuOpen ? " open" : "")}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </div>
      </header>

      <div className={"nav-overlay" + (menuOpen ? " open" : "")}>
        <nav className="nav-overlay-list">
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                "nav-overlay-link" + (isActive ? " active" : "")
              }
            >
              <span className="nav-overlay-index">{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
