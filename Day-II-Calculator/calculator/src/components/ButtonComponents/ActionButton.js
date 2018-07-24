import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div className={`actionButtonStyles ${props.extraStyles}`}>
      <p>{props.actionButtonLabel}</p>
    </div>
  );
};

export default ActionButton;
