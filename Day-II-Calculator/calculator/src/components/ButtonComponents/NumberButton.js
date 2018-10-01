import React from "react";
import "./Button.css";

const NumButton = (props) => {
  return (
    <button className={props.buttonStyle}>{props.label}</button>
  )
};

export default NumButton;
