import React from "react";
import "./Button.css";

function ActionButton(props) {
  return <button className={props.buttonStyle}>{props.text}</button>;
}

export default ActionButton;
