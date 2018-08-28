import React from "react";
import "./Button.css";

const button = props => (
  <div className={`btn number-button ${props.type}`}>{props.number}</div>
);
export default button;
