import React from "react";
import "./Button.css";

// - Create a <NumberButton /> component that can accept props and
// display any number/symbol passed down as text. (readme references
//     an example)

// - NumberButton button should also be able to accept dynamic props
// buttonStyle for styling
// <button className={props.buttonStyle}>{props.text}</button>

const NumberButton = props => {
  return (
    <div className={`number-button button ${props.type}`}>{props.text}</div>
  );
};

export default NumberButton;
