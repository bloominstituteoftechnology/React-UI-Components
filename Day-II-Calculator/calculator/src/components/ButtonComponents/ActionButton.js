import React from "react";
import "./Button.css";

const actionButton = props => (
  <div className="btn action-button">{props.type}</div>
);
export default actionButton;
