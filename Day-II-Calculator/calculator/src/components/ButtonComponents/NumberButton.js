import React from "react";
import "./Button.css";

const NumberButton = () => {
  // prop.displayNumber === 1
  return (
    <div className="columnParent">
      <div id="header1">
        <h3>React Calculator</h3>
      </div>
      <div id="displayWindow">0</div>
      <div className="flex-container">
        <div className="flex-item-clear">clear</div>
        <div className="flex-item-divide">÷</div>
      </div>
      <br />
      <div className="flex-container">
        <div className="flex-item-7">7</div>
        <div className="flex-item-8">8</div>
        <div className="flex-item-9">9</div>
        <div className="flex-item-multiply">x</div>
      </div>
      <br />
      <div className="flex-container">
        <div className="flex-item-4">4</div>
        <div className="flex-item-5">5</div>
        <div className="flex-item-6">6</div>
        <div className="flex-item-minus">-</div>
      </div>
      <br />
      <div className="flex-container">
        <div className="flex-item-1">1</div>
        <div className="flex-item-2">2</div>
        <div className="flex-item-3">3</div>
        <div className="flex-item-plus">+</div>
      </div>
      <br />
      <div className="flex-container">
        <div className="flex-item-0">0</div>
        <div className="flex-item-equal"> = </div>
      </div>
    </div>
  );
};
export default NumberButton;
