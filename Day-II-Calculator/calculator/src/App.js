import React from "react";
import "./App.css";
import NumberButton from "../src/components/ButtonComponents/NumberButton.js";
import ActionButton from "../src/components/ButtonComponents/ActionButton.js";
import DisplayScreen from "../src/components/DisplayComponents/CalculatorDisplay.js";
const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      <div class="calculator-container">
        <DisplayScreen result="0" />
        <div class="keyboard">
          <div className="number-container">
            <NumberButton number="clear" type="large-button" />
            <NumberButton number="7" />
            <NumberButton number="8" />
            <NumberButton number="9" />
            <NumberButton number="4" />
            <NumberButton number="5" />
            <NumberButton number="6" />
            <NumberButton number="1" />
            <NumberButton number="2" />
            <NumberButton number="3" />
            <NumberButton number="0" type="large-button" />
          </div>
          <div className="operator-container">
            <ActionButton type="%" />
            <ActionButton type="x" />
            <ActionButton type="-" />
            <ActionButton type="+" />
            <ActionButton type="=" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
