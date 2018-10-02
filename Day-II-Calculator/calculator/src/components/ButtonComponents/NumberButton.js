import React from "react";
import "./Button.css";

const NumberButtons = props => {
  return (
    <div className="numButtons">
      <button className={`normalNumberStyle ${props.numberButtonStyle}`}>
        {props.buttonText}
      </button>
      ;
    </div>
  );
};

NumberButtons.defaultProps = {
  normalNumberStyle: "red", //edit this part
  buttonText: "X"
};

export default NumberButtons;
