import React, { useState } from 'react';

import questions from '../questions';

const QuizApp = ({ switchPage , theme ,toggleTheme , setScore }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [marked, setMarked] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;


  const handleOptionClick = (selectedOption) => {
    if (selectedOption.isCorrect) {
        setScore(prevScore => prevScore + 1);
      }
    

    // Move to the next question
    if (isLastQuestion) {
        switchPage('result');
      } else {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setMarked(false);
      }
  };

  const handleMarkButtonClick = () => {
    setMarked(!marked);
  };

  const handleThemeChange = () => {
    // Logic to handle theme change by updating the theme state
    toggleTheme()
  };

  return (
    <>
    <img id='smalle' src="https://png.pngtree.com/png-vector/20220827/ourmid/pngtree-quiz-time-png-image_6125411.png" alt="" />
    <div className={`quiz-container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
       
      <h2 className={`question-text ${marked ? 'marked' : ''}`}>{currentQuestion.text}</h2>
      
      <div className="options-container">
        {currentQuestion.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option)}
            className={`option-button  ${theme === 'light' ? 'light-theme-button' : 'dark-theme-button'}`}
          >
            {option.text}
          </button>
        ))}
      </div>

      <div className="action-buttons">
        <button onClick={handleMarkButtonClick} className="mark-button">
          {marked ? 'Unmark' : 'Mark'}
        </button>
      </div>

      <div className="question-counter">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>

      {/* Theme Switcher Button */}
      <button
        onClick={handleThemeChange}
        className={`theme-switcher ${theme === 'light' ? 'light-theme-button' : 'dark-theme-button'}`}
      >
        Switch {theme} Theme
      </button>
    </div>
    </>
  );
};

export default QuizApp;
