// Result.jsx

import React from 'react';

const Result = ({ switchPage, theme, setTheme, score }) => {
  const percentage = Math.round((score / 5) * 100);

  const handleThemeChange = () => {
    // Logic to handle theme change by updating the theme state
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handlePlayAgainClick = () => {
    // Reset the page to 'home' to start the quiz again
    switchPage('home');
  };

  return (
    <div className={`result-container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <h1>Result</h1>
      <p>Your Score: {score}</p>
      <p>Percentage: {percentage}%</p>

      {/* Theme Switcher Button */}
      <button
        onClick={handleThemeChange}
        className={`theme-switcher ${theme === 'light' ? 'light-theme-button' : 'dark-theme-button'}`}
      >
        Switch Theme
      </button>

      <button onClick={handlePlayAgainClick} className="play-again-button">
        Play Again
      </button>
    </div>
  );
};

export default Result;
