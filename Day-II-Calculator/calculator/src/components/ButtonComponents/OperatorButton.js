import React from "react";
import "./Button.css";

const OperatorButton = props => {
  return (
    <div className="operatorButton" name={props.name} id={props.name} type="operator" onClick={props.handleChange}>
        <h1>
        {props.name}
        </h1>
    </div>
  );
};

export default OperatorButton;
