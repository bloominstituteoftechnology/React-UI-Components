import React from "react";
import "./Display.css";
import ActionButton from "../ButtonComponents/ActionButton";
import NumberButton from "../ButtonComponents/NumberButton";

function CalculatorDisplay() {
  return (
    <div className="calc-display-content">
      <div className="displayTotal">
        <h1 className="displayNum">0</h1>
      </div>
      <ActionButton buttonStyle={"actionBtn"} text={"clear"} />
      <NumberButton buttonStyle={"buttonOps"} text={"/"} />
      <NumberButton buttonStyle={"buttonNum"} text={"7"} />
      <NumberButton buttonStyle={"buttonNum"} text={"8"} />
      <NumberButton buttonStyle={"buttonNum"} text={"9"} />
      <NumberButton buttonStyle={"buttonOps"} text={"x"} />
      <NumberButton buttonStyle={"buttonNum"} text={"4"} />
      <NumberButton buttonStyle={"buttonNum"} text={"5"} />
      <NumberButton buttonStyle={"buttonNum"} text={"6"} />
      <NumberButton buttonStyle={"buttonOps"} text={"-"} />
      <NumberButton buttonStyle={"buttonNum"} text={"1"} />
      <NumberButton buttonStyle={"buttonNum"} text={"2"} />
      <NumberButton buttonStyle={"buttonNum"} text={"3"} />
      <NumberButton buttonStyle={"buttonOps"} text={"+"} />
      <ActionButton buttonStyle={"actionBtn"} text={"0"} />
      <NumberButton buttonStyle={"buttonOps"} text={"="} />
    </div>
  );
}

export default CalculatorDisplay;
