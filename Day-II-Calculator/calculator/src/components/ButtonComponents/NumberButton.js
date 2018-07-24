import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <button
      onClick={() => props.clickedNumber(props.name)}
      className={`buttons ${props.customNumberStyle}`}
    >
      {props.name}
    </button>
  );
};

NumberButton.defaultProps = {
  name: "1",
  customNumberStyle: "number-buttons"
};

export default NumberButton;
