import React from "react";
import "./App.css";
// import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div>
      <div className="calc-display">0</div>
      
      <div className="other-button">
      <NumberButton class="long-num" text="clear" />
      <ActionButton class="short-num" text="÷" />
    </div>
      
      <div className="num-button">
        <NumberButton class="short-num" text="7" />
        <NumberButton class="short-num" text="8" />
        <NumberButton class="short-num" text="9" />
        <ActionButton class="short-num1" text="x" />
      </div>

      <div className="num-button">
        <NumberButton class="short-num" text="4" />
        <NumberButton class="short-num" text="5" />
        <NumberButton class="short-num" text="6" />
        <ActionButton class="short-num1" text="-" />
      </div>

      <div className="num-button">
        <NumberButton class="short-num" text="1" />
        <NumberButton class="short-num" text="2" />
        <NumberButton class="short-num" text="3" />
        <ActionButton class="short-num1" text="+" />
      </div>

      <div className="other-button">
        <NumberButton class="long-num" text="0" />
        <ActionButton class="short-num" text="=" />
      </div>
    </div>
  );
};

export default App;
