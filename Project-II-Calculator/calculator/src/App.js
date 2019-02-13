import React from "react";
import "./App.css";

import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

// import ButtonContainer from './components/ButtonComponents/ButtonContainer';

const App = () => {
  return (
    <div className="wrapper">
      <CalculatorDisplay />

      <div className="bcontainer">
        <ActionButton style="wide clear" text="clear" />
        <ActionButton style="operation" text="/" />
      </div>

      <div className="bcontainer">
        <NumberButton style="num" text="7" />
        <NumberButton style="num" text="8" />
        <NumberButton style="num" text="9" />
        <ActionButton style="operation" text="X" />
      </div>

      <div className="bcontainer">
        <NumberButton style="num" text="4" />
        <NumberButton style="num" text="5" />
        <NumberButton style="num" text="6" />
        <ActionButton style="operation" text="-" />
      </div>

      <div className="bcontainer">
        <NumberButton style="num" text="1" />
        <NumberButton style="num" text="2" />
        <NumberButton style="num" text="3" />
        <ActionButton style="operation" text="+" />
      </div>

      <div className="bcontainer">
        <ActionButton style="wide zero" text="0" />
        <ActionButton style="operation" text="=" />
      </div>
    </div> //wrapper
  );
};

export default App;
