import React from 'react';
import './App.css';
import ActionButtons from './components/ButtonComponents/ActionButton.js';
import NumberButtons from './components/ButtonComponents/NumberButton.js';
// import NumButton from './components/ButtonComponents/NumberButton.js';
import Display from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className="calculator">
      <Display />
      <div className="main">
        <ActionButtons />
        {/* <NumButton className="nButtons" text="1" /> */}
        {/* <NumButton className="nButtons" text="2" /> */}
        {/* <NumButton className="nButtons" text="3" />; */}
        {/* <NumButton className="nButtons" text="4" /> */}
        {/* <NumButton className="nButtons" text="5" /> */}
        {/* <NumButton className="nButtons" text="6" /> */}
        {/* <NumButton className="nButtons" text="7" /> */}
        {/* <NumButton className="nButtons" text="8" /> */}
        {/* <NumButton className="nButtons" text="9" /> */}
        {/* <NumButton className="nButtons" text="0" /> */}
        <NumberButtons />
      </div>
    </div>
  );
};

export default App;
