import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className="app bordered">
      <CalculatorDisplay number="0" />
      <NumberButton text="clear" buttonStyle="btn-lrg" />
      <ActionButton action="&#xf7;" buttonStyle="btn-sml"/>
      <NumberButton text="7" buttonStyle="btn-sml" />
      <NumberButton text="8" buttonStyle="btn-sml" />
      <NumberButton text="9" buttonStyle="btn-sml" />
      <ActionButton action="&#xd7;" buttonStyle="btn-sml" />
      <NumberButton text="4" buttonStyle="btn-sml" />
      <NumberButton text="5" buttonStyle="btn-sml" />
      <NumberButton text="6" buttonStyle="btn-sml" />
      <ActionButton action="&#x2212;" buttonStyle="btn-sml" />
      <NumberButton text="1" buttonStyle="btn-sml" />
      <NumberButton text="2" buttonStyle="btn-sml" />
      <NumberButton text="3" buttonStyle="btn-sml" />
      <ActionButton action="&#x2b;" buttonStyle="btn-sml" />
      <NumberButton text="0" buttonStyle="btn-lrg" />
      <ActionButton action="&#x3d;" buttonStyle="btn-sml" />
    </div>
  );
};

export default App;
