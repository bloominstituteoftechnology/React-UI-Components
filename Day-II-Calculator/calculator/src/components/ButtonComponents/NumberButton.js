import React from "react";
import "./Button.css";

function NumberButton(props) {
  return <button className={props.buttonStyle}>{props.text}</button>;
}

export default NumberButton;

// function DynamicButton(props) {
//   return (
//     <button className={`dynamic-button ${props.type}`}>{props.text}</button>
//   );
// }

// <div className="number-button">
// <DynamicButton text="clear" type="number-button" />
// <DynamicButton text="0" type="number-button" />
// <DynamicButton text="1" type="number-button" />
// <DynamicButton text="2" type="number-button" />
// <DynamicButton text="3" type="number-button" />
// <DynamicButton text="4" type="number-button" />
// <DynamicButton text="5" type="number-button" />
// <DynamicButton text="6" type="number-button" />
// <DynamicButton text="7" type="number-button" />
// <DynamicButton text="8" type="number-button" />
// <DynamicButton text="9" type="number-button" />
// </div>
