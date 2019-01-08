import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import RowContainer from "./components/ButtonComponents/RowContainer";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="container-wrapper">
      <CalculatorDisplay />
      <RowContainer className="row-container">
        <ActionButton className="action-button" text="clear" />
      </RowContainer>
    </div>
  );
};

export default App;
