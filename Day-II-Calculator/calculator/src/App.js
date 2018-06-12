import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div className="app">

      <div className="row calculator">
        <CalculatorDisplay className="calc-display" number="3.14"/>

        <div className="row">
          <ActionButton action="clear"/>
          <ActionButton action="÷"/>
        </div>

        <div className="row">
          <div>
            <p>7</p>
          </div>
          <div>
            <p>8</p>
          </div>
          <div>
            <p>9</p>
          </div>
          <ActionButton action="X"/>

        </div>

        <div className="row">
          <div>
            <p>4</p>
          </div>
          <div>
            <p>5</p>
          </div>
          <div>
            <p>6</p>
          </div>
          <div>
            <p>-</p>
          </div>
        </div>

        <div className="row">
          <div>
            <p>1</p>
          </div>
          <div>
            <p>2</p>
          </div>
          <div>
            <p>3</p>
          </div>
          <div>
            <p>+</p>
          </div>
        </div>

        <div className="row">
          <div>
            <p>0</p>
          </div>
          <div>
            <p>=</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
