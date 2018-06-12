import React from "react";
import "./Button.css";

const ActionButton = props => {
  return <div className={props.btnClass}>{props.num}</div>;
};

export default ActionButton;
