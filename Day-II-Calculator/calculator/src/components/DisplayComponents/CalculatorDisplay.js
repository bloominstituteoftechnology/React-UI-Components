import React from "react";
import "./Display.css";

const CalDisplay = props => <div className={`display`}>{props.text}</div>;
const DisplaySpace = props => {
  return <CalDisplay text={props.text} />;
};
export default DisplaySpace;
