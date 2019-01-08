import React from "react";
import "./Button.css";

const ActionButton = props => {
  return <p className={props.buttonStyle}>{props.text}</p>;
};

export default ActionButton;
