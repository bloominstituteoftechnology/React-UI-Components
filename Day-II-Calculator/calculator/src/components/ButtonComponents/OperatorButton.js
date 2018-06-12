import React from "react";
import "./Button.css";

const OperatorButton = props => {
  return (
    <div class="operatorButton" id={props.value}>
      {props.value}
    </div>
  );
};

export default OperatorButton;
