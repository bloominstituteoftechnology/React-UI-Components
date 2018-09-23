import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <div className="row">
        <NumberButton btnWidth="btn-wide">clear</NumberButton>
        <ActionButton>÷</ActionButton>
      </div>
      <div className="row">
        <NumberButton btnWidth="btn-regular">7</NumberButton>
        <NumberButton btnWidth="btn-regular">8</NumberButton>
        <NumberButton btnWidth="btn-regular">9</NumberButton>
        <ActionButton>X</ActionButton>
      </div>
      <div className="row">
        <NumberButton btnWidth="btn-regular">7</NumberButton>
        <NumberButton btnWidth="btn-regular">8</NumberButton>
        <NumberButton btnWidth="btn-regular">9</NumberButton>
        <ActionButton>X</ActionButton>
      </div>
      <div className="row">
        <NumberButton btnWidth="btn-regular">7</NumberButton>
        <NumberButton btnWidth="btn-regular">8</NumberButton>
        <NumberButton btnWidth="btn-regular">9</NumberButton>
        <ActionButton>X</ActionButton>
      </div>
      <div className="row">
        <NumberButton btnWidth="btn-wide">0</NumberButton>
        <ActionButton>=</ActionButton>
      </div>
    </div>
  );
};

export default App;
