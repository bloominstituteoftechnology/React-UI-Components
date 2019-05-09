import React from "react";
import "./App.css";

import Display from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div>
      <Display />
      <ActionButton text="clear"/>
      <NumberButton buttonStyle="symbolButton" text="/" />
      <br />
      <NumberButton buttonStyle="numberButton" text="7" />
      <NumberButton buttonStyle="numberButton" text="8"/>
      <NumberButton buttonStyle="numberButton" text="9" />
      <NumberButton buttonStyle="symbolButton" text="X" />
      <br />
      <NumberButton buttonStyle="numberButton" text="4" />
      <NumberButton buttonStyle="numberButton" text="5"/>
      <NumberButton buttonStyle="numberButton" text="6" />
      <NumberButton buttonStyle="symbolButton" text="-" />
      <br />
      <NumberButton buttonStyle="numberButton" text="1" />
      <NumberButton buttonStyle="numberButton" text="2"/>
      <NumberButton buttonStyle="numberButton" text="3" />
      <NumberButton buttonStyle="symbolButton" text="+" />
      <br />
      <ActionButton text="0"/>
      <NumberButton buttonStyle="symbolButton" text="=" />
    </div>
  );
};

export default App;
