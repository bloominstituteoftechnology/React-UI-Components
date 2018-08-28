import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import Display from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="calculatorContainer">
      <Display />
     
        <ActionButton symbol="clear" className="wide" />
        <NumberButton bgColor="red" text="/" />
        <NumberButton bgColor="white" text="7" />
        <NumberButton bgColor="white" text="8" />
        <NumberButton bgColor="white" text="9" />
        <NumberButton bgColor="red" text="x" />
        <NumberButton bgColor="white" text="4" />
        <NumberButton bgColor="white" text="5" />
        <NumberButton bgColor="white" text="6" />
        <NumberButton bgColor="red" text="-" />
        <NumberButton bgColor="white" text="1" />
        <NumberButton bgColor="white" text="2" />
        <NumberButton bgColor="white" text="3" />
        <NumberButton bgColor="red" text="+" />
        <ActionButton symbol="0" className="wide" />
        <NumberButton bgColor="red" text="=" />
     
    </div>
  );
};

export default App;
