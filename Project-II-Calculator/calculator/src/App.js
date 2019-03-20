import React from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/Numbers";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="number-container">
      <CalculatorDisplay />
      <Numbers />
    </div>
  );
};

export default App;
