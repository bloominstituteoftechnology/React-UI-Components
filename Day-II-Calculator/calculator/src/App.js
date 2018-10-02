import React from "react";
import "./App.css";

import CalDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButtons from "./components/ButtonComponents/NumberButton";
import ActionButtons from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="appContainer">
      <div className="displayContainer">
        <CalDisplay />
      </div>
      <div className="numButtonContainer">
        <NumberButtons buttonText="clear" />
        <NumberButtons buttonText="1" />
        <NumberButtons buttonText="2" />
        <NumberButtons buttonText="3" />
        <NumberButtons buttonText="4" />
        <NumberButtons buttonText="5" />
        <NumberButtons buttonText="6" />
        <NumberButtons buttonText="7" />
        <NumberButtons buttonText="8" />
        <NumberButtons buttonText="9" />
        <NumberButtons buttonText="0" />
      </div>
      <div className="actButtonContainer">
        <ActionButtons buttonSymbol="%" />
        <ActionButtons buttonSymbol="X" />
        <ActionButtons buttonSymbol="-" />
        <ActionButtons buttonSymbol="+" />
        <ActionButtons buttonSymbol="=" />
      </div>
    </div>
  );
};

export default App;
