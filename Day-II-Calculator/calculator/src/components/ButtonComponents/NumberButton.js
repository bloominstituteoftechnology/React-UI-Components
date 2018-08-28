import React from "react";
import "./Button.css";

const button = props => (
  <div className={`btn number-button ${props.buttonStyle}`}>
    <a href="#">{props.number}</a>
  </div>
);
export default button;
