import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div>
      <div className="calculatorDisplay">
        <CalculatorDisplay numberStyle="calculatorDisplayNumber" number="421" />
      </div>

      <div className="numberButtonContainer">
        <div className="actionButtonRow">
          <ActionButton buttonStyle="wideButton clearButton" text="clear" />
          <NumberButton buttonStyle="numberButton functionButton" text="÷" />
        </div>

        <div className="numberButtonRow">
          <NumberButton buttonStyle="numberButton" text="7" />
          <NumberButton buttonStyle="numberButton" text="8" />
          <NumberButton buttonStyle="numberButton" text="9" />
          <NumberButton buttonStyle="numberButton functionButton" text="X" />
        </div>

        <div className="numberButtonRow">
          <NumberButton buttonStyle="numberButton" text="4" />
          <NumberButton buttonStyle="numberButton" text="5" />
          <NumberButton buttonStyle="numberButton" text="6" />
          <NumberButton buttonStyle="numberButton functionButton" text="-" />
        </div>

        <div className="numberButtonRow">
          <NumberButton buttonStyle="numberButton" text="3" />
          <NumberButton buttonStyle="numberButton" text="2" />
          <NumberButton buttonStyle="numberButton" text="1" />
          <NumberButton buttonStyle="numberButton functionButton" text="+" />
        </div>

        <div className="actionButtonRow">
          <ActionButton buttonStyle="wideButton zeroButton" text="0" />
          <NumberButton buttonStyle="numberButton functionButton" text="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
