import React from "react";
import "./Button.css";

function ActionButton(props) {
  return <button className={props.buttonStyle}>{props.text}</button>;
}
export default ActionButton;

// function NumberButton() {
//   return (
//     <div className="number-button">
//   <DynamicButton text="÷" type="action-button" />
//   <DynamicButton text="X" type="action-button" />
//   <DynamicButton text="-" type="action-button" />
//   <DynamicButton text="+" type="action-button" />
//   <DynamicButton text="=" type="action-button" />
//     </div>
//   );
// }
