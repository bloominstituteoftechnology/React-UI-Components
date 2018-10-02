import React from 'react';
import './App.css';
import Display from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="container">
            <Display />
            <ActionButton buttonStyle={"action"} text={"clear"} />
            <NumberButton buttonStyle={"operator"} text={"÷"} />
            <NumberButton buttonStyle={"number"} text={"7"} />
            <NumberButton buttonStyle={"number"} text={"8"} />
            <NumberButton buttonStyle={"number"} text={"9"} />
            <NumberButton buttonStyle={"operator"} text={"×"} />
            <NumberButton buttonStyle={"number"} text={"4"} />
            <NumberButton buttonStyle={"number"} text={"5"} />
            <NumberButton buttonStyle={"number"} text={"6"} />
            <NumberButton buttonStyle={"operator"} text={"-"} />
            <NumberButton buttonStyle={"number"} text={"1"} />
            <NumberButton buttonStyle={"number"} text={"2"} />
            <NumberButton buttonStyle={"number"} text={"3"} />
            <NumberButton buttonStyle={"operator"} text={"+"} />
            <ActionButton buttonStyle={"action"} text={"0"} />
            <NumberButton buttonStyle={"operator"} text={"="} />
        </div>
  );
};

export default App;
