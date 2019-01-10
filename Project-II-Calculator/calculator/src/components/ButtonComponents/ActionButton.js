import React from "react";
import "./Button.css";

// ÷

function ActionButton(props) {
  return <button className={props.actionStyle}>{props.text}</button>;
}

export default ActionButton;
