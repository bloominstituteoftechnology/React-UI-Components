import React from "react";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";
import OperatorButtons from "./components/ButtonComponents/OperatorButtons";
import "./App.css";

const math = require("mathjs");
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <CalculatorDisplay />
        <ButtonContainer numbers={numbers} />
        <OperatorButtons />
      </div>
    );
  }
}

export default App;
