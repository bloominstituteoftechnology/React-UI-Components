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
        <ActionButton className="action-button" text="clear" />
        <NumberButton background="functional-btn" text="÷" />
      </RowContainer>
      <RowContainer>
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <NumberButton text="x" />
      </RowContainer>
      <RowContainer>
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton text="-" />
      </RowContainer>
      <RowContainer>
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <NumberButton text="+" />
      </RowContainer>
      <RowContainer>
        <ActionButton className="action-button" text="0" />
        <NumberButton background="functional-btn" text="=" />
      </RowContainer>
    </div>
  );
};

export default App;
