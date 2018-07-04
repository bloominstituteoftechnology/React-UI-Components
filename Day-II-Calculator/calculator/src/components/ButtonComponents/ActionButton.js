import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <button
      onClick={() => props.actionCalculator(props.name)}
      className={`buttons ${props.customActionStyle}`}
    >
      {props.name}
    </button>
  );
};

ActionButton.defaultProps = {
  name: "1",
  customActionStyle: "action-buttons"
};

export default ActionButton;
