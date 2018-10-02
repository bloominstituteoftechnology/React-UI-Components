import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  let total = 0;
  let state = {
    displayValue: "0"
  };

  function inputDigit(digit) {
    const { displayValue } = this.state;
    this.setState({
      displayValue: displayValue + digit
    });
    console.log(displayValue);
  }

  return (
    <div className="calculator">
      <CalculatorDisplay buttonStyle="display" displayNumber={total} />
      <div className="button-container">
        <div className="clear-plus-number-buttons">
          <ActionButton buttonStyle="action-button clear" text="Clear" />
          <div className="number-button-row">
            <NumberButton
              buttonStyle="number-button"
              onClick={() => this.inputDigit(7)}
              text="7"
            />
            <NumberButton
              buttonStyle="number-button"
              onClick={() => this.inputDigit(8)}
              text="8"
            />
            <NumberButton
              buttonStyle="number-button"
              onClick={() => this.inputDigit(9)}
              text="9"
            />
          </div>
          <div className="number-button-row">
            <NumberButton
              buttonStyle="number-button"
              onClick={() => this.inputDigit(4)}
              text="4"
            />
            <NumberButton
              buttonStyle="number-button"
              onClick={() => this.inputDigit(5)}
              text="5"
            />
            <NumberButton
              buttonStyle="number-button"
              onClick={() => this.inputDigit(6)}
              text="6"
            />
          </div>
          <div className="number-button-row">
            <NumberButton
              buttonStyle="number-button"
              onClick={() => this.inputDigit(1)}
              text="1"
            />
            <NumberButton
              buttonStyle="number-button"
              onClick={() => this.inputDigit(2)}
              text="2"
            />
            <NumberButton
              buttonStyle="number-button"
              onClick={() => this.inputDigit(3)}
              text="3"
            />
          </div>
          <ActionButton buttonStyle="number-button zero" text="0" />
        </div>
        <div className="operator-buttons">
          <ActionButton buttonStyle="action-button" text="÷" />
          <ActionButton buttonStyle="action-button" text="×" />
          <ActionButton buttonStyle="action-button minus" text="—" />
          <ActionButton buttonStyle="action-button" text="+" />
          <ActionButton buttonStyle="action-button" text="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
