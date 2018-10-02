import React from "react";
import "./Display.css";
import DisplayContainer from "./CalculatorDisplay";
import ButtonContainer from "../ButtonComponents/ButtonContainer";

const CalcContainer = props => {
  return (
    <div className="calc-container">
      <DisplayContainer />
      <ButtonContainer />
    </div>
  );
};

export default CalcContainer;
