import React from "react";
import "./App.css";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="Wrapper">
      <CalculatorDisplay display="6" />

      <ActionButton name="clear" type="wide" color="white" />
      <ActionButton name="&#247;" type="single" color="red" />
      <NumberButton name="7" type="single" color="white" />
      <NumberButton name="8" type="single" color="white" />
      <NumberButton name="9" type="single" color="white" />
      <ActionButton name="x" type="single" color="red" />
      <NumberButton name="4" type="single" color="white" />
      <NumberButton name="5" type="single" color="white" />
      <NumberButton name="6" type="single" color="white" />
      <ActionButton name="-" type="single" color="red" />
      <NumberButton name="1" type="single" color="white" />
      <NumberButton name="2" type="single" color="white" />
      <NumberButton name="3" type="single" color="white" />
      <ActionButton name="+" type="single" color="red" />
      <NumberButton name="0" type="wide" color="white" />
      <ActionButton name="=" type="single" color="red" />
    </div>
  );
};

export default App;
