import React from "react";
import "./Button.css";
const NumberButton = props => {
  return (
    <div className={props.numberProps.style}>
      <h3>{props.numberProps.display}</h3>
    </div>
  );
};
export default NumberButton;
