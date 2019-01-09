import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <button
      onClick={props.clicked}
      name={props.number}
      className={`${props.number}__button ${props.className}`}
    >
      {props.number}
    </button>
  );
};

export default NumberButton;
