import React from 'react';
import CalculationDisplay from "./CalculationDisplay.js";
import ButtonDisplay from "./ButtonDisplay.js";

const Display = (props) => {
  return (
    <div className="display">
      <CalculationDisplay value={props.total} />
      <ButtonDisplay buttons={props.buttons} operators={props.operators} />
    </div>
  );
};

export default Display;
