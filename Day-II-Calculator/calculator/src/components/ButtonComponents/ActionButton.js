import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div
      className={`${props.buttonStyling} width-${props.width} ${props.action} ${
        props.type
      }`}
    >
      {props.text}
      <i className={`fas fa-${props.action}`} />
    </div>
  );
};

export default ActionButton;
