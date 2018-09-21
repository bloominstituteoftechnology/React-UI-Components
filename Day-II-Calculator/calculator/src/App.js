import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div>
      <div>
        <ActionButton text="clear" />
        <NumberButton text = "÷" />
      </div>
      <div>
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <NumberButton text="x" />
      </div>
      <div>
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton text="-" />
      </div>
      <div>
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <NumberButton text="+" />
      </div>
      <div>
        <ActionButton text="0" />
        <NumberButton text="=" />
      </div>
    </div>
  );
};

export default App;
