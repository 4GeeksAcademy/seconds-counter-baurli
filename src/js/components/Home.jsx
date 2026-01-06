import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({
  seconds,
  isRunning,
  mode,
  startValue,
  alertAt,
  onToggle,
  onReset,
  onModeChange,
  onStartValueChange,
  onAlertAtChange
}) => {
  const digits = String(seconds).padStart(6, "0").split("");

  return (
    <div style={{ textAlign: "center" }}>
      {/* COUNTER */}
      <div className="counter">
        <div className="digit clock">
          <i className="far fa-clock"></i>
        </div>

        {digits.map((digit, index) => (
          <div key={index} className="digit">
            {digit}
          </div>
        ))}
      </div>

      {/* PANEL */}
      <div className="panel">
        <div className="controls">
          <button onClick={onToggle}>{isRunning ? "Stop" : "Resume"}</button>
          <button onClick={onReset}>Reset</button>
        </div>

        <div className="row">
          <label>
            Mode:{" "}
            <select value={mode} onChange={(e) => onModeChange(e.target.value)}>
              <option value="countup">Count Up</option>
              <option value="countdown">Count Down</option>
            </select>
          </label>
        </div>

        <div className="row">
          <label>
            Start from:{" "}
            <input
              type="number"
              value={startValue}
              onChange={(e) => onStartValueChange(e.target.value)}
            />
          </label>
        </div>

        <div className="row">
          <label>
            Alert at:{" "}
            <input
              type="number"
              value={alertAt}
              onChange={(e) => onAlertAtChange(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Home;