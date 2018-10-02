import React from "react";
import "./Button.css";
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";

const ButtonContainer = () => {
  return (
    <div className="button-container">
      <div className="clear-plus-number-buttons">
        <ActionButton buttonStyle="action-button clear" text="Clear" />
        <div className="number-button-row">
          <NumberButton buttonStyle="number-button" text="7" />
          <NumberButton buttonStyle="number-button" text="8" />
          <NumberButton buttonStyle="number-button" text="9" />
        </div>
        <div className="number-button-row">
          <NumberButton buttonStyle="number-button" text="4" />
          <NumberButton buttonStyle="number-button" text="5" />
          <NumberButton buttonStyle="number-button" text="6" />
        </div>
        <div className="number-button-row">
          <NumberButton buttonStyle="number-button" text="1" />
          <NumberButton buttonStyle="number-button" text="2" />
          <NumberButton buttonStyle="number-button" text="3" />
        </div>
        <ActionButton buttonStyle="number-button zero" text="0" />
      </div>
      <div className="operator-buttons">
        <ActionButton buttonStyle="action-button" text="÷" />
        <ActionButton buttonStyle="action-button" text="×" />
        <ActionButton buttonStyle="action-button" text="-" />
        <ActionButton buttonStyle="action-button" text="+" />
        <ActionButton buttonStyle="action-button" text="=" />
      </div>
    </div>
  );
};

export default ButtonContainer;
