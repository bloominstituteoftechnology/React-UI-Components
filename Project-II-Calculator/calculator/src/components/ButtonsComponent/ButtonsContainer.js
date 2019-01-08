import React from "react";
import NumberButton from "./NumberButton";
import OperatorButtons from "./OperatorButtons";
import "./Button.css";

const ButtonContainer = props => {
  return (
    <div className="buttons__container">
      <div className="number__container">
        {props.numbers.map((number, index) => {
          return <NumberButton number={number} key={"number" + index} />;
        })}
      </div>
      <div className="operator__container">
        {props.operators.map((operator, index) => {
          return (
            <OperatorButtons operator={operator} key={"operator" + index} />
          );
        })}
      </div>
    </div>
  );
};

export default ButtonContainer;
