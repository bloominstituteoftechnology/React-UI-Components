import React from "react";
import "./Button.css";

function ActionButton(props) {
  return (
    <div className="ActionButton">
      <button
        className={props.buttonStyle}
        onClick={() => props.onClick(props.text)}
      >
        {props.text}
      </button>
    </div>
  );
}

export default ActionButton;
