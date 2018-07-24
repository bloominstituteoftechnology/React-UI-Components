import React from 'react';
import './App.css';

import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="app-container">
      <Display />
      <div className="left-btn-container">
        <ActionButton text="clear" styles="clrBtn" />
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <NumberButton text="0" styles="zeroBtn"/>
      </div>
      <div className="right-btn-container">
        <ActionButton text="÷" />
        <ActionButton text="X" />
        <ActionButton text="-" />
        <ActionButton text="+" />
        <ActionButton text="=" />
      </div>
    </div>
  );
};

export default App;

// <div>
//   <h3>Welcome to React Calculator</h3>
//   <p>
//     We have given you a starter project. You'll want to build out your
//     components in their respective files, remove this code and replace it
//     with the proper components.
//   </p>
//   <p>
//     <strong>
//       Don't forget to `default export` your components and import them here
//       inside of this file in order to make them work.
//     </strong>
//   </p>
// </div>
