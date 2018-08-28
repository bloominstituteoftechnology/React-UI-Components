import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className = 'wrapper-main'>
      <div className = 'wrapper-sub'>
        <CalculatorDisplay/>

        <div className = 'button-wrap'>
          <ActionButton type = 'act-button'/>
          <NumberButton type = 'slash-button' text = '/'/>
        </div>

        <div className = 'button-wrap'>
          <NumberButton type = 'num-button' value = '7'/>
          <NumberButton type = 'num-button' value = '8'/>
          <NumberButton type = 'num-button' value = '9'/>
          <ActionButton type = 'act-button' value = 'X'/>
        </div>

        <div className = 'button-wrap'>
          <NumberButton type = 'num-button' value = '4'/>
          <NumberButton type = 'num-button' value = '5'/>
          <NumberButton type = 'num-button' value = '6'/>
          <ActionButton type = 'act-button' value = '-'/>
        </div>

        <div className = 'button-wrap'>
          <NumberButton type = 'num-button' value = '1'/>
          <NumberButton type = 'num-button' value = '2'/>
          <NumberButton type = 'num-button' value = '3'/>
          <ActionButton type = 'act-button' value = '+'/>
        </div>

        <div className = 'button-wrap'>
          <NumberButton type = 'wide-button num-button' value = '0' />
          <ActionButton type = 'act-button' value = '=' />
        </div>

      </div> // wrapper-sub
    </div> // wrapper-main
  );
};

export default App;
