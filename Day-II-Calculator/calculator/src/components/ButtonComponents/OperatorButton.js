import React from "react";
import "./Button.css";

const OperatorButton = props => {
  return (
    <div class="operatorButton" id={props.value}>
        <h1>
        {props.value}
        </h1>
    </div>
  );
};

export default OperatorButton;
