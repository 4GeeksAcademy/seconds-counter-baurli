import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)

let seconds = 0;
let isRunning = true;

let mode = "countup";


let startValue = 60;


let alertAt = "";


let alertedAlready = false;

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(
    <Home
      seconds={seconds}
      isRunning={isRunning}
      mode={mode}
      startValue={startValue}
      alertAt={alertAt}
      onToggle={() => {
        isRunning = !isRunning;
        renderApp();
      }}
      onReset={() => {
        alertedAlready = false;
        if (mode === "countdown") seconds = Number(startValue) || 0;
        else seconds = 0;
        renderApp();
      }}
      onModeChange={(newMode) => {
        mode = newMode;
        alertedAlready = false;

        if (mode === "countdown") seconds = Number(startValue) || 0;
        else seconds = 0;

        renderApp();
      }}
      onStartValueChange={(val) => {
        startValue = val;
        alertedAlready = false;

        
        if (mode === "countdown") seconds = Number(startValue) || 0;

        renderApp();
      }}
      onAlertAtChange={(val) => {
        alertAt = val;
        alertedAlready = false;
        renderApp();
      }}
    />
  );
};


seconds = 0;
renderApp();

setInterval(() => {
  if (!isRunning) return;

  if (mode === "countup") {
    seconds++;
  } else {
    
    if (seconds > 0) seconds--;
  }

  
  const alertNumber = Number(alertAt);
  if (!Number.isNaN(alertNumber) && alertAt !== "" && !alertedAlready) {
    if (seconds === alertNumber) {
      alertedAlready = true;
      alert(`Reached ${alertNumber} seconds!`);
    }
  }

  renderApp();
}, 1000);