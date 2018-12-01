import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div className={`${props.styling} ${props.weight} action`}>{props.text}</div>
  );
};

export default ActionButton;
