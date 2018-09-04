import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="main-container">
      <div className="inner-wrapper">
        <CalculatorDisplay />
      </div>
    </div>
  );
};

export default App;
