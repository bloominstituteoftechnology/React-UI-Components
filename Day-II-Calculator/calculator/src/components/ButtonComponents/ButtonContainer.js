import React from "react";
import "./Button.css";
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";

const ButtonContainer = () => {
  return (
    <div className="button-container">
      <div className="clear-plus-number-buttons">
        <ActionButton buttonStyle="Clear" />
        <div className="number-button-row">
          <NumberButton buttonStyle="7" />
          <NumberButton buttonStyle="8" />
          <NumberButton buttonStyle="9" />
        </div>
        <div className="number-button-row">
          <NumberButton buttonStyle="4" />
          <NumberButton buttonStyle="5" />
          <NumberButton buttonStyle="6" />
        </div>
        <div className="number-button-row">
          <NumberButton buttonStyle="1" />
          <NumberButton buttonStyle="2" />
          <NumberButton buttonStyle="3" />
        </div>
        <ActionButton buttonStyle="0" />
      </div>
      <div className="operator-buttons">
        <ActionButton buttonStyle="/" />
        <ActionButton buttonStyle="x" />
        <ActionButton buttonStyle="-" />
        <ActionButton buttonStyle="+" />
        <ActionButton buttonStyle="=" />
      </div>
    </div>
  );
};

export default ButtonContainer;
