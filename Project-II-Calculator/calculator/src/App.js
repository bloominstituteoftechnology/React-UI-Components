import React from 'react';
import './App.css';
//import NumberButton from './components/ButtonComponents/NumberButton.js';
//import ActionButton from './components/ButtonComponents/ActionButton;
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <h3>React Calculator</h3>
      <CalculatorDisplay />
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
