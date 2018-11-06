import React from "react";
import "./Button.css";
import Action from "./ActionButton";
import NumberButton from "./NumberButton";

const ButtonContainer = () => {
  return (
    <div className="btn-container">
      <Action />
      <NumberButton />
    </div>
  );
};

export default ButtonContainer;
