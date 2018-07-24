import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButtons from './components/ButtonComponents/NumberButtons.js';
import Display from './components/DisplayComponents/CalculatorDisplay.js';


const App = () => (
  <div>
    <Display />
    <ActionButton />
    <NumberButtons />
  </div>
);


export default App;
