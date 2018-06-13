import React from "react";
import "./Button.css";

const OperatorButton = props => {
  return (
    <div className="operatorButton" id={props.name} onClick={props.handleChange}>
        <h1>
        {props.name}
        </h1>
    </div>
  );
};

export default OperatorButton;
