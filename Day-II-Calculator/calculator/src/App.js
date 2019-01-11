import React, { useState } from "react";
import "./App.css";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  const [display, setDisplay] = useState(0);

  return (
    <div className="container">
      <CalculatorDisplay number={display} />
      <ButtonContainer setDisplay={setDisplay} />
    </div>
  );
};

export default App;
