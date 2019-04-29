import React from "react";
import "./Button.css";
const ActionButton = props => {
  return (
    <div className={`${props.actionProps.style}`}>
      <h3>{props.actionProps.display}</h3>
    </div>
  );
};
export default ActionButton;
