import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonWrapper from ".components/ButtonComponents/ButtonWrapper";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
const App = () => {
  return (
    <div className="main-wrapper">
      <div className="inner-wrapper">
        <CalculatorDisplay />
        <ButtonWrapper>
          <ActionButton type="clr-btn" />
          <NumberButton type="danger-btn" text="/" />
        </ButtonWrapper>

        <ButtonWrapper></ButtonWrapper>

        <ButtonWrapper></ButtonWrapper>

        <ButtonWrapper></ButtonWrapper>

        <ButtonWrapper></ButtonWrapper>
      </div>
    </div>
  );
};

export default App;
