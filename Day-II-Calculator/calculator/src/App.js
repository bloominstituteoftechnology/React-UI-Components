import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

//calculation display object
let calculationDisplay = {
  value: 0,
  displayStyle: "display"
};

//clear button object
const clearButton = {
  value: "clear",
  buttonStyle: "largeWhite"
};

//array of number button objects
const numberButtons = [
  {
    value: 1,
    buttonStyle: "smallWhite"
  },

  {
    value: 2,
    buttonStyle: "smallWhite"
  },

  {
    value: 3,
    buttonStyle: "smallWhite"
  },

  {
    value: 4,
    buttonStyle: "smallWhite"
  },

  {
    value: 5,
    buttonStyle: "smallWhite"
  },

  {
    value: 6,
    buttonStyle: "smallWhite"
  },

  {
    value: 7,
    buttonStyle: "smallWhite"
  },

  {
    value: 8,
    buttonStyle: "smallWhite"
  },

  {
    value: 9,
    buttonStyle: "smallWhite"
  },

  {
    value: 0,
    buttonStyle: "largeWhite"
  }
];

const actionButtons = [
  {
    value: "/",
    buttonStyle: "smallRed"
  },

  {
    value: "*",
    buttonStyle: "smallRed"
  },

  {
    value: "-",
    buttonStyle: "smallRed"
  },

  {
    value: "+",
    buttonStyle: "smallRed"
  },

  {
    value: "=",
    buttonStyle: "smallRed"
  },

];

const App = () => {
  return (
    <div className="App">

      <CalculatorDisplay display={calculationDisplay} />

      <div className="whiteButtons">
        <ActionButton button={clearButton} />
        {numberButtons.map((button) => <NumberButton button={button} />)}
      </div>

      <div className="redButtons">
        {actionButtons.map((button) => <ActionButton button={button} />)}
      </div>
    
    </div>
  );
};

export default App;
