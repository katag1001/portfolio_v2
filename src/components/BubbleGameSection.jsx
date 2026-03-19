import React, { useEffect, useState } from "react";
import BubbleGame from "./BubbleGame";
import "./bubbleGameSection.css";

const LAST_SCORE_KEY = "bubbleGame_lastScore";
const BEST_SCORE_KEY = "bubbleGame_bestScore";

export default function BubbleGameSection() {
  const [bestScore, setBestScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);

  const loadScores = () => {
    const best = Number(localStorage.getItem(BEST_SCORE_KEY)) || 0;
    const last = Number(localStorage.getItem(LAST_SCORE_KEY)) || 0;

    setBestScore(best);
    setLastScore(last);
  };

  useEffect(() => {
    loadScores();

    const interval = setInterval(loadScores, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-section-container bubble-section-container">

      <h2 className="card-title">Bubble Pop Challenge</h2>

      <div className="bubble-section-content bubble-scroll-container">

        <div className="bubble-game-area">
          <BubbleGame />
        </div>

        <div className="bubble-info-panel">

          <h3 className="bubble-info-title">How to Play</h3>

          <p className="bubble-description">
            Hover your mouse over the bubbles to pop them before they get to the top!
          </p>

          <div className="bubble-score-panel">
            <div className="bubble-score">
              <span>High Score</span>
              <strong>{bestScore}s</strong>
            </div>

            <div className="bubble-score">
              <span>Last Score</span>
              <strong>{lastScore}s</strong>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}