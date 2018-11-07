import React from "react";
import "./Button.css";

function ActionButton(props) {
  return (
    <React.Fragment>
      <button className={props.buttonStyle}>{props.text}</button>
    </React.Fragment>
  );
}

export default ActionButton;
