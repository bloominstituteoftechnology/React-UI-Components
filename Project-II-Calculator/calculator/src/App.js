import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import Clear from './components/ButtonComponents/ClearButton';
import ZeroButton from './components/ButtonComponents/ZeroButton';

const App = () => {
  return (
    <div className="app">
      <div>
        <CalculatorDisplay display="0"/>
      </div>
      <div>
        <Clear text="clear" />
        <ActionButton text="÷" />
      </div>
      <div>
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <ActionButton text="x" />
      </div>
      <div>
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <ActionButton text="-" />
      </div>
      <div>
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <ActionButton text="+" />
      </div>
      <div>
        <ZeroButton text="0" />
        <ActionButton text="=" />
      </div>
    </div>
  );
};

export default App;
