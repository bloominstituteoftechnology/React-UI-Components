import React from "react";
import NumberButton from "./NumberButton";
import "./Button.css";
const numbersObj = [
  { display: "Clear", style: "action-button" },
  { display: "÷", style: "operator-button" },
  { display: "7", style: "number-button" },
  { display: "8", style: "number-button" },
  { display: "9", style: "number-button" },
  { display: "×", style: "operator-button" },
  { display: "4", style: "number-button" },
  { display: "5", style: "number-button" },
  { display: "6", style: "number-button" },
  { display: "−", style: "operator-button" },
  { display: "1", style: "number-button" },
  { display: "2", style: "number-button" },
  { display: "3", style: "number-button" },
  { display: "+", style: "operator-button" },
  { display: "0", style: "action-button" },
  { display: "=", style: "operator-button" }
];
function Numbers() {
  return (
    <div className="numbers-wrapper">
      {numbersObj.map(function(numbers) {
        return <NumberButton numberProps={numbers} />;
      })}
    </div>
  );
}
export default Numbers;
