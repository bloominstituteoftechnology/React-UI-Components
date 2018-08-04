import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div
      className={`actionButtonStyles ${props.extraStyles}`}
      onClick={() => {
        console.log("actionbutton value", props.actionButtonValue);
        if (props.actionButtonValue === "clear") {
          props.clearHandler(props);
        } else if (props.actionButtonValue === "=") {
          props.evalHandler(props);
        } else {
          props.inputHandler(props);
        }
      }}
    >
      <p>{props.actionButtonLabel}</p>
    </div>
  );
};

export default ActionButton;
