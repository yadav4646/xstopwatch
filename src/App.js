import React, { useState, useEffect } from "react";
import "./App.css";

function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(
        () => setElapsedTime((prevTime) => prevTime + 1),
        1000
      );
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  const toggleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const resetTime = () => {
    setElapsedTime(0);
    setIsRunning(false); // Ensures the stopwatch stops when reset
  };

  return (
    <div className="Stopwatch">
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <h1>Stopwatch</h1>
        <p className="time-display">
          Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <div className="button-group">
          <button className="btn btn-success" onClick={toggleStartStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button className="btn btn-warning" onClick={resetTime}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
