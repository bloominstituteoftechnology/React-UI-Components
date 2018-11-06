import React, { Fragment } from "react";
import './Button.css';

const ActionButton = props => {
  return <button className="action">{props.text}</button>;
};

export default ActionButton;
