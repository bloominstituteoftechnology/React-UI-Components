import React from 'react';
import './App.css';
import './components/ButtonComponents/Button.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
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
      <div className="calc-container">
        <CalculatorDisplay text="0" />
        <div className="row">
          <ActionButton buttonStyle="clear" text="clear" />
          <NumberButton buttonStyle="operation" text="÷"/>
        </div>
        <div className="row">
          <NumberButton buttonStyle="number" text="7"/>
          <NumberButton buttonStyle="number" text="8"/>
          <NumberButton buttonStyle="number" text="9"/>
          <ActionButton buttonStyle="operation" text="x"/>
      </div>
        <div className="row">
          <NumberButton buttonStyle="number" text="4"/>
          <NumberButton buttonStyle="number" text="5"/>
          <NumberButton buttonStyle="number" text="6"/>
          <ActionButton buttonStyle="operation" text="-"/>
      </div>
        <div className="row">
          <NumberButton buttonStyle="number" text="1"/>
          <NumberButton buttonStyle="number" text="2"/>
          <NumberButton buttonStyle="number" text="3"/>
          <ActionButton buttonStyle="operation" text="+"/>
      </div>
      <div>
        <NumberButton buttonStyle="zero" text="0" />
        <ActionButton buttonStyle="operation" text="=" />
      </div>
      
      </div>
    </div>
  );
};

export default App;
