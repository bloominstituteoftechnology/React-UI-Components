import React from "react";
import NumberButtons from "./NumberButton";
import OperatorButtons from "./OperatorButtons";
import "./Button.css";

const ButtonContainer = props => {
  return (
    <div className="buttons__container">
      <div className="number__container">
        <button>clear</button>
        {props.number.map({})}
      </div>

      <NumberButtons numbers={props.numbers} />
      <OperatorButtons operators={props.operators} />
    </div>
  );
};

export default ButtonContainer;
