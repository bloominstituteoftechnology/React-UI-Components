import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className="app">
      <div class="answerPlaceholder">
            
            </div>
            <CalculatorDisplay/>
              <ActionButton text="clear"/>
              <NumberButton number="/" type="operator"/>
              <NumberButton number="1" type="num"/>
              <NumberButton number="2" type="num"/>
              <NumberButton number="3" type="num"/>
              <NumberButton number="x" type="operator"/>
              <NumberButton number="4" type="num"/>
              <NumberButton number="5" type="num"/>
              <NumberButton number="6" type="num"/>
              <NumberButton number="-" type="operator"/>
              <NumberButton number="7" type="num"/>
              <NumberButton number="8" type="num"/>
              <NumberButton number="9" type="num"/>
              <NumberButton number="+" type="operator"/>
              <ActionButton text="0"/>
              <NumberButton number="=" type="operator"/>
              

    </div>
  );
};

export default App;
