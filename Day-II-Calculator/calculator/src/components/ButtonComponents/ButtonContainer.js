import React from "react";
import "./Button.css";
import ActionButton from "./ActionButton";
import NumberButtons from "./NumberButton";

const ButtonContainer = () => {
  return (
    <div className="buttons-container">
      <NumberButtons />
      <ActionButton />
    </div>
  );
};

export default ButtonContainer;
