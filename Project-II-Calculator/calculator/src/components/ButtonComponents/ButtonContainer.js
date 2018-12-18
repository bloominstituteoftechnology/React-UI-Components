import React from "react";
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";
import "./Button.css";

const ButtonContainer = props => {
  return (
    <div className="btn__container">
      <ActionButton className="action" text="clear" />
      {props.numbers.map(number => {
        return <NumberButton className={"btn"} text={number} />;
      })}
      <ActionButton className="action zero" text="0" />
    </div>
  );
};

export default ButtonContainer;
