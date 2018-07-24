import React from 'react';
import './App.css';
import ActionContainer from './components/ButtonComponents/ActionButton.js';
import NumberContainer from './components/ButtonComponents/NumberButtons.js';
import Display from './components/DisplayComponents/CalculatorDisplay.js';


const App = () => (
  <div className="app-style">
    <Display />
    <div className="buttons">
      <NumberContainer />
      <ActionContainer />
    </div>
  </div>
);


export default App;
