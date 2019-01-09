import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <button className={props.buttonStyle} value={props.value} onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

NumberButton.defaultProps = {
  buttonStyle: "default-button"
};

export default NumberButton;
