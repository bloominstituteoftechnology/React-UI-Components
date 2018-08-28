import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js';
import NumberPad from './components/NumberPadComponents/NumberPad.js';

const App = () => {
  return (
    <div className="app">
      <Display total="0"/>
      <NumberPad />
    </div>
  );
};

export default App;
