import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="main-container">
      <div className="display">
        <CalculatorDisplay />
      </div>
      <div className="rows button-row-one">
        <ActionButton action="Clear" btnClass="button action-button clear" />
        <ActionButton
          action="&divide;"
          btnClass="button action-button divide"
        />
      </div>

      <div className="rows button-row-two">
        <NumberButton number={7} btnClass="button number-button seven" />
        <NumberButton number={8} btnClass="button number-button eight" />
        <NumberButton number={9} btnClass="button number-button nine" />
        <ActionButton
          action="&#215;"
          btnClass="button action-button multiply"
        />
      </div>

      <div className="rows button-row-three">
        <NumberButton number={4} btnClass="button number-button four" />
        <NumberButton number={5} btnClass="button number-button five" />
        <NumberButton number={6} btnClass="button number-button six" />
        <ActionButton action="&#45;" btnClass="button action-button minus" />
      </div>

      <div className="rows button-row-four">
        <NumberButton number={1} btnClass="button number-button one" />
        <NumberButton number={2} btnClass="button number-button two" />
        <NumberButton number={3} btnClass="button number-button three" />
        <ActionButton action="&#43;" btnClass="button action-button plus" />
      </div>

      <div className="rows button-row-five">
        <NumberButton number={0} btnClass="button number-button zero" />
        <ActionButton action="&#61;" btnClass="button action-button equals" />
      </div>
    </div>
  );
};

export default App;
