import React from 'react';
import CalculationDisplay from "./CalculationDisplay.js";
import ButtonDisplay from "./ButtonDisplay.js";

const Display = (props) => {
  return (
    <div className="display">
      <CalculationDisplay value="0" />
      <ButtonDisplay />
    </div>
  );
};

export default Display;
