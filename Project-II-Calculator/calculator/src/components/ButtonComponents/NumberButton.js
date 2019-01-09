import React from "react";
import "./Button.css";

function NumberButton(props) {
  return (
    <div className="NumberButton">
      <button className={props.buttonStyle} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}

export default NumberButton;
