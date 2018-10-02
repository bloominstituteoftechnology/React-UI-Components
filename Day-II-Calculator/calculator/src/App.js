import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="app">
      <NumberButton buttonStyle="wide" text="clear" />
      <ActionButton buttonStyle="red" text="&#247;" />
      <NumberButton buttonStyle="white" text="7" />
      <NumberButton buttonStyle="white" text="8" />
      <NumberButton buttonStyle="white" text="9" />
      <ActionButton buttonStyle="red" text="&#215;" />
      <NumberButton buttonStyle="white" text="4" />
      <NumberButton buttonStyle="white" text="5" />
      <NumberButton buttonStyle="white" text="6" />
      <ActionButton buttonStyle="red" text="&#8722;" />
      <NumberButton buttonStyle="white" text="1" />
      <NumberButton buttonStyle="white" text="2" />
      <NumberButton buttonStyle="white" text="3" />
      <ActionButton buttonStyle="red" text="+" />
      <NumberButton buttonStyle="wide bold" text="0" />
      <ActionButton buttonStyle="red" text="=" />
    </div>
  );
};

export default App;
