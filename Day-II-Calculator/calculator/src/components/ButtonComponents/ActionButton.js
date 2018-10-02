import React from "react";
import "./Button.css";

const NumberButton = props => (
  <div className={`buttonStyle ${props.buttonStyle}`}>{props.text}</div>
);

export default NumberButton;

//g2g
