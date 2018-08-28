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
          <ActionButton type="wide-btn" value="clear" />
          <ActionButton type="danger-btn" value="/" />
        </ButtonWrapper>

        <ButtonWrapper>
          <NumberButton type="num-btn" value="7" />
          <NumberButton type="num-btn" value="8" />
          <NumberButton type="num-btn" value="9" />
          <ActionButton type="danger-btn" value="X" />
        </ButtonWrapper>

        <ButtonWrapper>
          <NumberButton type="num-btn" value="4" />
          <NumberButton type="num-btn" value="5" />
          <NumberButton type="num-btn" value="6" />
          <ActionButton type="danger-btn" value="-" />
        </ButtonWrapper>

        <ButtonWrapper></ButtonWrapper>

        <ButtonWrapper></ButtonWrapper>
      </div>
    </div>
  );
};

export default App;
