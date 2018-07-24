import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'

const App = () => {
  return (
    <div>
     <CalculatorDisplay buttonStyle="display-style" text="0" />
     <div class="row-one">
     <ActionButton buttonStyle="action-style" text="clear" />
      <NumberButton buttonStyle="operator-style" text="&divide;" />
    </div>
    <div class="row-two">
    <NumberButton buttonStyle="number-style" text="7" />
    <NumberButton buttonStyle="number-style" text="8" />
    <NumberButton buttonStyle="number-style" text="9" />
    <NumberButton buttonStyle="operator-style" text="&times;" />
    </div>
    <div class="row-three">
    <NumberButton buttonStyle="number-style" text="4" />
    <NumberButton buttonStyle="number-style" text="5" />
    <NumberButton buttonStyle="number-style" text="6" />
    <NumberButton buttonStyle="operator-style" text="&minus;" />
    </div>
    <div class="row-four">
    <NumberButton buttonStyle="number-style" text="1" />
    <NumberButton buttonStyle="number-style" text="2" />
    <NumberButton buttonStyle="number-style" text="3" />
    <NumberButton buttonStyle="operator-style" text="+" />
    </div>
    <div class="row-five">
     <ActionButton buttonStyle="action-style" text="0" />
      <NumberButton class="zero" buttonStyle="operator-style" text="=" />
    </div>
    </div>
  );
};

export default App;
