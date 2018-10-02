import React from "react";
import "./Button.css";

const clearBtn = "Clear";

const ActionButton = props => {
  return <button className='actionBtn'>{props.buttonText}</button>;
};

export default ActionButton;
