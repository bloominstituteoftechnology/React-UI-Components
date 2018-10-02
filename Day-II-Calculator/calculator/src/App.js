import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay displaycalc="displaycalc" text='0' />
      <div className="action act-container">
      <ActionButton buttonStyle="action zero" text="0" />
      <ActionButton buttonStyle="equals" text="=" />
      </div>
      <div className="zero-container">
      <ActionButton buttonStyle="action clear" text="clear" />
      <ActionButton buttonStyle="divide" text="÷" />
      </div>
      <div className="numbers">
      <div>
      <NumberButton buttonStyle="number" text="7" />
      <NumberButton buttonStyle="number" text="8" />
      <NumberButton buttonStyle="number" text="9" />
      <ActionButton buttonStyle="multiply" text="️×" />
      </div>
      <div>
      <NumberButton buttonStyle="number" text="4" />
      <NumberButton buttonStyle="number" text="5" />
      <NumberButton buttonStyle="number" text="6" />
      <ActionButton buttonStyle="subtract" text="-" />
      </div>
      <div>
      <NumberButton buttonStyle="number" text="1" />
      <NumberButton buttonStyle="number" text="2" />
      <NumberButton buttonStyle="number" text="3" />
      <ActionButton buttonStyle="add" text="+" />
      </div>
      </div>


    
    </div>
  );
};

export default App;
