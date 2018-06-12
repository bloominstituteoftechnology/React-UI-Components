import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      <div className="app-wrapper">
        <CalculatorDisplay btnClass="calc-class" num="0" />
        <ActionButton btnClass="action-btn col-sm-9" num="clear" />
        <NumberButton btnClass="btn-class operators col-sm-3" num="÷" />
        <NumberButton btnClass="btn-class col-sm-3" num="7" />
        <NumberButton btnClass="btn-class col-sm-3" num="8" />
        <NumberButton btnClass="btn-class col-sm-3" num="9" />
        <NumberButton btnClass="btn-class operators col-sm-3" num="X" />
        <NumberButton btnClass="btn-class col-sm-3" num="4" />
        <NumberButton btnClass="btn-class col-sm-3" num="5" />
        <NumberButton btnClass="btn-class col-sm-3" num="6" />
        <NumberButton btnClass="btn-class  operators col-sm-3" num="-" />
        <NumberButton btnClass="btn-class col-sm-3" num="1" />
        <NumberButton btnClass="btn-class col-sm-3" num="2" />
        <NumberButton btnClass="btn-class col-sm-3" num="3" />
        <NumberButton btnClass="btn-class  operators col-sm-3" num="+" />
        <ActionButton btnClass="action-btn col-sm-9" num="0" />
        <NumberButton btnClass="btn-class operators col-sm-3" num="=" />
      </div>
    </div>
  );
};

export default App;
