import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="wrap">
      <Display />
      <div className="row1">
        <ActionButton text="clear" />
        <NumButton text="/" spec="red" />
      </div>
      <div className="row2">
        <NumButton text="7" />
        <NumButton text="8" />
        <NumButton text="9" />
        <NumButton text="X" spec="red" />
      </div>
      <div className="row3">
        <NumButton text="4" />
        <NumButton text="5" />
        <NumButton text="6" />
        <NumButton text="--" spec="red" />
      </div>
      <div className="row4">
        <NumButton text="1" />
        <NumButton text="2" />
        <NumButton text="3" />
        <NumButton text="+" spec="red" />
      </div>
      <div className="row5">
        <ActionButton text="0" />
        <NumButton text="=" spec="red" />
      </div>
    </div>
  );
};

export default App;
