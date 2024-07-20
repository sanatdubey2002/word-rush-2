import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="container">
      <h1>WordRush</h1>
      <p className="welcome-message">
        Welcome to WordRush! Test your word-guessing skills and aim for the highest streak.
      </p>
      <div className="rules-container">
        <h2>How to Play:</h2>
        <ul className="rules-list">
          <li> You have 6 chances to guess the word of the turn.</li>
          <li> If a letter is in the correct position, it will be displayed in green.</li>
          <li> If a letter is in the word but in the wrong position, it will be displayed in yellow.</li>
          <li> If a letter is not in the word, it will be displayed in gray.</li>
          <li> Correct guesses in succession will increase your streak.</li>
          <li> If you fail to guess the word, your streak will reset to zero.</li>
          <li> The longest streak is stored as your best.</li>
          <li> You can use a hint to reveal the word's definition. If you guess correctly after using a hint, it will not count towards your streak, but your streak will remain intact.</li>
        </ul>
      </div>
      <Link to="/game">
      <button className="start-button">Start Game</button></Link>
    </div>
  );
};

export default HomePage;



