import React from 'react';
import './App.css';

import ActionBtn from  './components/ButtonComponents/ActionButton.js';
import NumberBtn from  './components/ButtonComponents/NumberButton.js';
import Display from  './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div>
      <Display />
      <ActionBtn />
      <ActionBtn />
      <NumberBtn />
      <NumberBtn />
      <NumberBtn />
      <ActionBtn />
      <NumberBtn />
      <NumberBtn />
      <NumberBtn />
      <ActionBtn />
      <NumberBtn />
      <NumberBtn />
      <NumberBtn />
      <ActionBtn />
      <NumberBtn />
      <ActionBtn />

    </div>
  );
};

export default App;
