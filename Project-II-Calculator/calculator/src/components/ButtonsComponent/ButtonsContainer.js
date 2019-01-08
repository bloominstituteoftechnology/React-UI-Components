import React from "react";
import "./Buttons.css";

const operators = ["÷", "x", "-", "+", "="];
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const ButtonContainer = props => {
  return (
    <div className="buttons__container">
      <NumberButtons />
      <OperatorButtons />
    </div>
  );
};

export default ButtonContainer;
