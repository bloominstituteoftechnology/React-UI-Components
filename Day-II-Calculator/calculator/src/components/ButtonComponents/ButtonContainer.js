import React from "react";
import "./Button.css";
import ActionButton from "./ActionButton";
import OperatorButton from "./OperatorButton";

const ButtonContainer = props => {
  return (
    <div className="input-fields">
      <ActionButton setDisplay={props.setDisplay} />
      <OperatorButton />
    </div>
  );
};

export default ButtonContainer;
