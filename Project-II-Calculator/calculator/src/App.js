import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import RowContainer from "./components/ButtonComponents/RowContainer";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="container-wrapper">
      <CalculatorDisplay />
      <RowContainer>
        <ActionButton text="clear" />
        <NumberButton buttonStyle="functional-btn" text="÷" />
      </RowContainer>
      <RowContainer>
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <NumberButton buttonStyle="functional-btn" text="x" />
      </RowContainer>
      <RowContainer>
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton buttonStyle="functional-btn" text="-" />
      </RowContainer>
      <RowContainer>
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <NumberButton buttonStyle="functional-btn" text="+" />
      </RowContainer>
      <RowContainer>
        <ActionButton text="0" />
        <NumberButton buttonStyle="functional-btn" text="=" />
      </RowContainer>
    </div>
  );
};

export default App;
