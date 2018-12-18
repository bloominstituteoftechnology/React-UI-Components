import React from "react";
import "./Button.css";

const OperatorButtons = _ => {
  return (
    <div className="operator__container">
      <button className="operator__btn">÷</button>
      <button className="operator__btn">x</button>
      <button className="operator__btn">-</button>
      <button className="operator__btn">+</button>
      <button className="operator__btn">=</button>
    </div>
  );
};

export default OperatorButtons;
