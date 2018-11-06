import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton";

const ButtonContainer = props => {
  return (
    <div className="btn-container">
      <NumberButton />
    </div>
  );
};

export default ButtonContainer;
