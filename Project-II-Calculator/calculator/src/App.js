import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
const App = () => {
  return (
    <div>
      <h3>Welcome to React!</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      
     
      <CalcDisplay />
      
    </div>
  );
};

export default App;