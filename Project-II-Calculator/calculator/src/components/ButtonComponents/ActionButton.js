import React from "react";
import "./Button.css";

const ActionButton = props => {
  return <button className={props.buttonStyle} value={props.value} onClick={props.handleClick}>{props.text}</button>;
};

ActionButton.defaultProps = {
  buttonStyle: "default-action-button"
}

export default ActionButton;