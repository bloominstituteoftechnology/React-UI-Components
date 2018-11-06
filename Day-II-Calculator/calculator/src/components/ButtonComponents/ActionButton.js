import React from "react";
import "./Button.css";

import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <button className={`action-button ${props.buttonStyle}`}>
      {props.text}
    </button>
  );
};

export default ActionButton;
