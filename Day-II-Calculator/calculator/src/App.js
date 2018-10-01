import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import WideButtons from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
const App = () => {
  return (
    <div>
      <div className="calculatorDisplay">
        <CalculatorDisplay />
      </div>
      <div className="keypad">
        <div className="whitearea">
          <div>
            <WideButtons buttonStyle="widebutton" text="clear" />
          </div>
          <div>
            <NumberButton buttonStyle="numberButton" text="7" />
            <NumberButton buttonStyle="numberButton" text="8" />
            <NumberButton buttonStyle="numberButton" text="9" />
          </div>
          <div>
            <NumberButton buttonStyle="numberButton" text="6" />
            <NumberButton buttonStyle="numberButton" text="5" />
            <NumberButton buttonStyle="numberButton" text="4" />
          </div>
          <div>
            <NumberButton buttonStyle="numberButton" text="3" />
            <NumberButton buttonStyle="numberButton" text="2" />
            <NumberButton buttonStyle="numberButton" text="1" />
          </div>
          <div>
            <WideButtons buttonStyle="widebutton" text="0" />
          </div>
        </div>

        <div className="operations">
          <NumberButton buttonStyle="OperationButton" text="/" />
          <NumberButton buttonStyle="OperationButton" text="*" />
          <NumberButton buttonStyle="OperationButton" text="-" />
          <NumberButton buttonStyle="OperationButton" text="+" />
          <NumberButton buttonStyle="OperationButton" text="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
