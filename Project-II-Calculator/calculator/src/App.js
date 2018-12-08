import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import './App.css';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
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

      <div className="calculator-container">
        <CalculatorDisplay />


        <div className= "row-one">
          <ActionButton name = "clear" />
          <NumberButton name = "&#247;" redButton = "red-button" />
        </div>

        <div className="row-two">
          <NumberButton name = "7"/>
          <NumberButton name = "8"/>
          <NumberButton name = "9"/>
          <NumberButton name = "x" redButton = "red-button" />
        </div>

        <div className="row-three">
          <NumberButton name = "4"/>
          <NumberButton name = "5"/>
          <NumberButton name = "6"/>
          <NumberButton name = "-" redButton = "red-button" />
        </div>

        <div className="row-four">
          <NumberButton name = "1"/>
          <NumberButton name = "2"/>
          <NumberButton name = "3"/>
          <NumberButton name = "+" redButton = "red-button" />
        </div>

        <div className= "row-five">
          <ActionButton name = "0" />
          <NumberButton name = "=" redButton = "red-button" />
        </div>


      </div>
    </div>
  );
};



export default App;
