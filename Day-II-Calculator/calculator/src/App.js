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
    </div>
  );
};

export default App;
