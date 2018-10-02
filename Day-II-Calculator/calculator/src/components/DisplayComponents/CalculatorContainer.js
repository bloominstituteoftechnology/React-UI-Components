import React from "react";
import "./Display.css";
import DisplayContainer from "./CalculatorDisplay";
import NumberButtons from "../ButtonComponents/NumberButton";

const CalcContainer = props => {
  return (
    <div className="calc-container">
      <DisplayContainer />
      <NumberButtons />
    </div>
  );
};

export default CalcContainer;
