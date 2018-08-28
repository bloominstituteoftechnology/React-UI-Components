import React from "react";
import "./Button.css";

const actionButton = props => (
  <div className={`btn action-button ${props.buttonStyle}`}>{props.type}</div>
);
export default actionButton;
