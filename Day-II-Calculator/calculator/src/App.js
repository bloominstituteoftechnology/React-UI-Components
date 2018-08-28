import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';



const App = () => {
  return (
    <div className="App">
      {/* <h3>Welcome to React Calculator</h3>
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
      </p> */}
      {/* <CalculatorDisplay text="0" display-style="black-rectangle"/> */}
      <CalculatorDisplay />
      <div className="numberSymbol">
        <div className="numbers">
          <ActionButton text="clear" buttonStyle="rectangle"/>
          <NumberButton text="7" buttonStyle="white-square"/>
          <NumberButton text="8" buttonStyle="white-square"/>
          <NumberButton text="9" buttonStyle="white-square"/>
          <NumberButton text="4" buttonStyle="white-square"/>
          <NumberButton text="5" buttonStyle="white-square"/>
          <NumberButton text="6" buttonStyle="white-square"/>
          <NumberButton text="1" buttonStyle="white-square"/>
          <NumberButton text="2" buttonStyle="white-square"/>
          <NumberButton text="3" buttonStyle="white-square"/>
          <ActionButton text="0" buttonStyle="rectangle"/>
        </div>
     
        <div className="symbols">
          <NumberButton text="%" buttonStyle="red-square"/>
          <NumberButton text="x" buttonStyle="red-square"/>
          <NumberButton text="-" buttonStyle="red-square"/>
          <NumberButton text="+" buttonStyle="red-square"/>
          <NumberButton text="=" buttonStyle="red-square"/>
        </div>
      </div>
    </div>
  );
};

export default App;
