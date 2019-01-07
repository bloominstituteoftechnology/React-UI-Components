import React from "react";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import FunctionButton from "./components/ButtonComponents/FunctionButton";
import "./App.css";


const numberDisplay = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
const functionDisplay = ["÷", "×", "–", "+", "="]

class App extends React.Component {
  render() {
  return (
    <div className="container">
      <CalculatorDisplay calcDisplay='0' />
      <div className="button-container">
        <ActionButton buttonStyle="action-button" actionDisplay='clear' />
        <div className="number-container">
          {numberDisplay.map((object, i) => <NumberButton buttonStyle="number-button" text={object} key={i} />)}
        </div>
        <ActionButton buttonStyle="action-button" actionDisplay='0' />
      </div>
      <div className="function-container">
        {functionDisplay.map((object, i) => <FunctionButton buttonStyle="function-button" text={object} key={i} />)}
      </div>
    </div>
      );
    };
  }
    
    export default App;
    
    
