import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return <h2 className={props.buttonStyle}>{props.text}</h2>;
};

CalculatorDisplay.defaultProps = {
  buttonStyle: "default-calc-display"
}

export default CalculatorDisplay;
