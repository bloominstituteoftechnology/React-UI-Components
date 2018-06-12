import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <container>
      <ActionButton backgroundColor="action-button" text="clear" />
      <NumberButton backgroundColor="red-button" text="/" />
      </container>
      <container>
      <NumberButton backgroundColor="number-button" text="7" />
      <NumberButton backgroundColor="number-button" text="8" />
      <NumberButton backgroundColor="number-button" text="9" />
      <NumberButton backgroundColor="red-button" text="X" />
      </container>
      <container>
      <NumberButton backgroundColor="number-button" text="4" />
      <NumberButton backgroundColor="number-button" text="5" />
      <NumberButton backgroundColor="number-button" text="6" />
      <NumberButton backgroundColor="red-button" text="-" />
      </container>
      <container>
      <NumberButton backgroundColor="number-button" text="1" />
      <NumberButton backgroundColor="number-button" text="2" />
      <NumberButton backgroundColor="number-button" text="3" />
      <NumberButton backgroundColor="red-button" text="+" />
      </container>
      <container>
      <ActionButton backgroundColor="action-button" text="0" />
      <NumberButton backgroundColor="red-button" text="=" />
      </container>
    </div>
  );
};

export default App;
