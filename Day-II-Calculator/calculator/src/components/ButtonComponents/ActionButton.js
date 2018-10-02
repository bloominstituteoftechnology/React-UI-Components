import React from "react";
import "./Button.css";

const ActionButton = props => {
  // return <button className={`action-btn ${props.buttonStyle}`}>{props.text}</button>;
  return <button className={props.buttonStyle}>{props.text}</button>;
};

export default ActionButton;
