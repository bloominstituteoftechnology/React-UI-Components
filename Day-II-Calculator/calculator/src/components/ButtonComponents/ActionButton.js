import React from "react";
import "./Button.css";

const ActionButton = props => {
  return <div className="action-button">{props.buttonStyle}</div>;
};

export default ActionButton;
