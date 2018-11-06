import React, { Fragment } from "react";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import OperationButton from './components/OperationComponents/OperationComponents';
import "./App.css";

const numPad = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const operationPad = ["÷", "×", "-", "+", "="];

const App = () => {
  return (
    <Fragment>
      <CalculatorDisplay />
      <div className="bottomContainer">
        <div className="leftCon">
          <ActionButton style="actionButton" text="clear" />
          <div className="numberButtonDiv">
            {numPad.map(item => {
              return <NumberButton style="numberButton" text={item} />;
            })}
          </div>
          <ActionButton style="actionButton" text="0" />
        </div>
        <div className="operationButtonDiv">
          {operationPad.map(item => {
            return <OperationButton style="operationButton" text={item} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
