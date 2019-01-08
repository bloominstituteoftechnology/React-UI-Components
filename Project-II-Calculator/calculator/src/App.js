import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div class="container">
    <CalculatorDisplay buttonStyle="display" text="0" />
    <div class="button-container">
    <ActionButton buttonStyle="btn-general action" text="clear" />
    <NumberButton buttonStyle="btn-general operand" text="÷" />
    <NumberButton buttonStyle="btn-general num" text="7" />
    <NumberButton buttonStyle="btn-general num" text="8" />
    <NumberButton buttonStyle="btn-general num" text="9" />
    <NumberButton buttonStyle="btn-general operand" text="×" />
    <NumberButton buttonStyle="btn-general num" text="4" />
    <NumberButton buttonStyle="btn-general num" text="5" />
    <NumberButton buttonStyle="btn-general num" text="6" />
    <NumberButton buttonStyle="btn-general operand" text="-" />
    <NumberButton buttonStyle="btn-general num" text="1" />
    <NumberButton buttonStyle="btn-general num" text="2" />
    <NumberButton buttonStyle="btn-general num" text="3" />
    <NumberButton buttonStyle="btn-general operand" text="+" />
    <ActionButton buttonStyle="btn-general action num" text="0" />
    <NumberButton buttonStyle="btn-general operand" text="=" />

    </div>

 
    </div>
  );
};

export default App;
