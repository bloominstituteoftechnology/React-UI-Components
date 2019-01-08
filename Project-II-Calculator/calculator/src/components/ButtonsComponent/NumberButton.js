import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <button
      name={props.number}
      className={`${props.number}__button number__button`}
    >
      {props.number}
    </button>
  );
};

export default NumberButton;
