import React, { useState, useEffect } from 'react';
import "./modeToggle.css"

// ModeToggle Component
const ModeToggle = () => {
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); 
  }, [theme]);

  const toggleTheme = () => {
    console.log('Button clicked!');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button className="mode-toggle-button" onClick={toggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ModeToggle;