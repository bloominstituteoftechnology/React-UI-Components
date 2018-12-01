import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div className={`btn width-${props.width} ${props.type}`}>
      {props.text}
      <i className={`fas fa-${props.action}`} />
    </div>
  );
};

export default ActionButton;
