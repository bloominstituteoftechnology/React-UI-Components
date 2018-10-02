import React from "react";
import CalcultorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import "./css/index.css";
import NumberButtons from "./components/ButtonComponents/NumberButton";
import ActionButtons from "./components/ButtonComponents/ActionButton";

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const symbol = [
//   '<i class="fas fa-divide" />',
//   '<i class="fas fa-times" />',
//   '<i class="fas fa-minus" />',
//   '<i class="fas fa-plus" />',
//   '<i class="fas fa-equals" />'
// ];
const App = () => {
  return (
    <div className="calculator-container">
      <CalcultorDisplay />
      <div className="buttons-container">
        <div className="number-buttons-container">
          <ActionButtons text={"clear"} buttonStyle={"action"} />
          <div className="numbers-container">
            <NumberButtons text={"7"} buttonStyle={"numbers"} />
            <NumberButtons text={"8"} buttonStyle={"numbers"} />
            <NumberButtons text={"9"} buttonStyle={"numbers"} />
            <NumberButtons text={"4"} buttonStyle={"numbers"} />
            <NumberButtons text={"5"} buttonStyle={"numbers"} />
            <NumberButtons text={"6"} buttonStyle={"numbers"} />
            <NumberButtons text={"1"} buttonStyle={"numbers"} />
            <NumberButtons text={"2"} buttonStyle={"numbers"} />
            <NumberButtons text={"3"} buttonStyle={"numbers"} />
          </div>
          <ActionButtons text={"0"} buttonStyle={"action"} />
        </div>
        <div className="symbols-container">
          <NumberButtons text={"÷"} buttonStyle={"symbols"} />
          <NumberButtons text={"×"} buttonStyle={"symbols"} />
          <NumberButtons text={"-"} buttonStyle={"symbols"} />
          <NumberButtons text={"+"} buttonStyle={"symbols"} />
          <NumberButtons text={"="} buttonStyle={"symbols"} />
        </div>
      </div>
    </div>
  );
};

export default App;
