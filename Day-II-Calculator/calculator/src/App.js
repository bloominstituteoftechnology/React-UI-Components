import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="main-wrapper">
      <div className="inner-wrapper">
        <CalculatorDisplay />
        <div className="btn-wrapper">
          <ActionButton clickfn={this.handleClick} type="wide-btn" />
          <ActionButton clickfn={this.handleClick} type="danger-btn" />
        </div>
        <div className="btn-wrapper">
          <NumberButton clickfn={this.handleClick} type="num-btn" value="7" />
          <NumberButton clickfn={this.handleClick} type="num-btn" />
          <NumberButton clickfn={this.handleClick} type="num-btn" />
          <ActionButton clickfn={this.handleClick} type="danger-btn" />
        </div>
        <div className="btn-wrapper">
          <NumberButton clickfn={this.handleClick} type="num-btn" value="7" />
          <NumberButton clickfn={this.handleClick} type="num-btn" />
          <NumberButton clickfn={this.handleClick} type="num-btn" />
          <ActionButton clickfn={this.handleClick} type="danger-btn" />
        </div>
        <div className="btn-wrapper">
          <NumberButton clickfn={this.handleClick} type="num-btn" value="7" />
          <NumberButton clickfn={this.handleClick} type="num-btn" />
          <NumberButton clickfn={this.handleClick} type="num-btn" />
          <ActionButton clickfn={this.handleClick} type="danger-btn" />
        </div>
        <div className="btn-wrapper">
          <ActionButton clickfn={this.handleClick} type="wide-btn" />
          <ActionButton clickfn={this.handleClick} type="danger-btn" />
        </div>
      </div>
    </div>
  );
};

export default App;
