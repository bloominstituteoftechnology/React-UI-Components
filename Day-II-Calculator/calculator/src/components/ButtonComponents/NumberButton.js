import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <div
      className={`numberButton-div ${props.extraStyles}`}
      onClick={props.inputHandler}
      id={props.id}
    >
      <p>{props.numberLabel}</p>
    </div>
  );
};

export default NumberButton;
