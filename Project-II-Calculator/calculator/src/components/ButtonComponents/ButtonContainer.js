import React from "react";
import NumberButton from "./NumberButton";
import "./Button.css";

const ButtonContainer = props => {
  return (
    <div className="btn__container">
      {props.numbers.map(number => {
        return <NumberButton className={"btn"} text={number} />;
      })}
    </div>
  );
};

export default ButtonContainer;
