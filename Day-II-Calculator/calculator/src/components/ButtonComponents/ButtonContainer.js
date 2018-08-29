import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";

const ButtonContainer = () => {
  return (
    <div className="button-container">
      <div className="button__numbers-container">
        <div className="button__numbers--clear">
          <ActionButton custom="btn-lg" weight="btn-weight" content="clear" />
        </div>
        <div className="button__numbers--numerals">
          <div className="button__numbers--numerals-container">
            <NumberButton content="7" />
            <NumberButton content="8" />
            <NumberButton content="9" />
          </div>
          <div className="button__numbers--numerals-container">
            <NumberButton content="4" />
            <NumberButton content="5" />
            <NumberButton content="6" />
          </div>
          <div className="button__numbers--numerals-container">
            <NumberButton content="1" />
            <NumberButton content="2" />
            <NumberButton content="3" />
          </div>
        </div>
        <div className="button__numbers--zero">
          <ActionButton custom="btn-lg" content="0" />
        </div>
      </div>
      <div className="button__actions-container">
        <ActionButton custom="btn-colored" weight="btn-weight" content="÷" />
        <ActionButton custom="btn-colored" weight="btn-weight" content="x" />
        <ActionButton custom="btn-colored" weight="btn-weight" content="-" />
        <ActionButton custom="btn-colored" weight="btn-weight" content="+" />
        <ActionButton custom="btn-colored" weight="btn-weight" content="=" />
      </div>
    </div>
  );
};
export default ButtonContainer;
