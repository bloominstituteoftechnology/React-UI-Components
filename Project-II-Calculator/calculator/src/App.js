import React, { Component } from "react";
// import update from "immutability-helper";
// import math from "mathjs";
import "./App.css";

import { CalcDisp } from "./components/DisplayComponents/CalculatorDisplay";
import { NumBtn } from "./components/ButtonComponents/NumberButton";
import { ActBtn } from "./components/ButtonComponents/ActionButton";

export const App = () => {
  // constructor() {
  //   super();
  //   this.state = { operations: [] };
  // }

  // calculateOperations = () => {
  //   let result = this.state.operations.join("");
  //   if (result) {
  //     result = math.eval(result);
  //     result = math.format(result, { precision: 14 });
  //     result = String(result);
  //     this.setState({
  //       operations: [result]
  //     });
  //   }
  // };
  // handleClick = e => {
  //   const value = e.target.getAttribute("data-value");
  //   switch (value) {
  //     case "clear":
  //       this.setState({
  //         operations: []
  //       });
  //       break;
  //     case "equal":
  //       this.calculateOperations();
  //       break;
  //     default:
  //       const newOperations = update(this.state.operations, {
  //         $push: [value]
  //       });
  //       this.setState({
  //         operations: newOperations
  //       });
  //       break;
  //   }
  // };

  return (
    <div className="App">
      <CalcDisp value={0} />
      <ActBtn text="clear" buttonStyle="ActBtn" />
      <NumBtn text="÷" buttonStyle="NumBtnRed" />
      <NumBtn text="7" buttonStyle="NumBtn" />
      <NumBtn text="8" buttonStyle="NumBtn" />
      <NumBtn text="9" buttonStyle="NumBtn" />
      <NumBtn text="x" buttonStyle="NumBtnRed" />
      <NumBtn text="4" buttonStyle="NumBtn" />
      <NumBtn text="5" buttonStyle="NumBtn" />
      <NumBtn text="6" buttonStyle="NumBtn" />
      <NumBtn text="-" buttonStyle="NumBtnRed" />
      <NumBtn text="1" buttonStyle="NumBtn" />
      <NumBtn text="2" buttonStyle="NumBtn" />
      <NumBtn text="3" buttonStyle="NumBtn" />
      <NumBtn text="+" buttonStyle="NumBtnRed" />
      <ActBtn text="0" buttonStyle="ActBtn" />
      <NumBtn text="=" buttonStyle="NumBtnRed" />
    </div>
  );
};
