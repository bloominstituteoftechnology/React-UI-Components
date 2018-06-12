import React from "react";
import "./Display.css";

const CalculationDisplay = props => {
  return (
    <div className={props.customClass}>
      <div>
        <h1>{props.value}</h1>
      </div>
    </div>
  );
};
CalculationDisplay.defaultProps = {
  customClass: "calculationDisplay",
  name: "0"
};

export default CalculationDisplay;
