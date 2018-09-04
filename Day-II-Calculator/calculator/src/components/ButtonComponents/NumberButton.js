import React from "react";
import "./Button.css";

function NumberButton(props) {
  return (
    <button onClick={props.clickfn} className={`num-btn ${props.type}`}>
      {" "}
    </button>
  );
}

export default NumberButton;
