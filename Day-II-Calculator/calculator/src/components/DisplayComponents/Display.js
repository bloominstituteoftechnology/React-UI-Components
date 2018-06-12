import React from 'react';
import CalculationDisplay from "./CalculationDisplay.js";
import ButtonDisplay from "./ButtonDisplay.js";

const buttons =
    [
        ["clear"],
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3],
        [0]
    ];

let operators = {
    operators: ["÷", "×", "-", "+", "="]
}

const Display = (props) => {
  return (
    <div className="display">
      <CalculationDisplay value="0" />
      <ButtonDisplay buttons={buttons} operators={operators} />
    </div>
  );
};

export default Display;
