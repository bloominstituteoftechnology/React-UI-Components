import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";

const numbers = ["ลบออก", "๗", "๘", "๙", "๔", "๕", "๖", "๑", "๒", "๓", "๐"];
const signs = ["÷", "X", "-", "+", "="];

const ButtonContainer = props => {
  return (
    <div className="keypad">
      <div className="keypad-left">
        {numbers.map(num => (
          <NumberButton text={num} buttonStyle="number-btn" />
        ))}
      </div>
      <div className="keypad-right">
        {signs.map(sign => (
          <ActionButton text={sign} buttonStyle="action-btn" />
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
