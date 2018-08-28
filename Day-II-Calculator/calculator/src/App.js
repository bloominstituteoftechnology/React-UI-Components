import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperatorButton from './components/ButtonComponents/OperatorButton'


const App = () => {
  return (
    <div className="appClass">
      <CalculatorDisplay numTotal="0" />
      <div className="numsAndOperators">
        <div className="numsAndClear">
          <ActionButton text="clear"/>
          <NumberButton text="1" buttonStyle="numButtonClass"/>
          <NumberButton text="2" buttonStyle="numButtonClass"/>
          <NumberButton text="3" buttonStyle="numButtonClass"/>
          <NumberButton text="4" buttonStyle="numButtonClass"/>
          <NumberButton text="5" buttonStyle="numButtonClass"/>
          <NumberButton text="6" buttonStyle="numButtonClass"/>
          <NumberButton text="7" buttonStyle="numButtonClass"/>
          <NumberButton text="8" buttonStyle="numButtonClass"/>
          <NumberButton text="9" buttonStyle="numButtonClass"/>
          <ActionButton text="0"/>
        </div>
        <div className="operators">
          <OperatorButton text="divide"/>
          <OperatorButton text="multiply"/>
          <OperatorButton text="subtract"/>
          <OperatorButton text="add"/>
          <OperatorButton text="equal"/>
        </div>
      </div>
      
      {/* <h3>Welcome to React Calculator</h3> */}
      {/* <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}
    </div>
  );
};

export default App;
