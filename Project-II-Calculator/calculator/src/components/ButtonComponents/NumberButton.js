import React from "react";
import "./Button.css";

const NumberButton = props => (
  <button className={props.className}>{props.text}</button>
);

export default NumberButton;
