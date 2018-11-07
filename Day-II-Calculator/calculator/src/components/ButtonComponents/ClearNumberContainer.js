import React, { Fragment } from "react";
import "./Button.css";
import ActionButton from "../ButtonComponents/ActionButton";
import NumberButton from "../ButtonComponents/NumberButton";
import OperatorButton from "../ButtonComponents/OperatorButton";

const ClearNumberContainer = () => {
  return (
    <Fragment>
      <section className="wholeContainer">
        <div className="numberContainer">
          <ActionButton text="clear" />
          <div className="regContainer">
            <NumberButton buttonStyle="btn" text="1" />
            <NumberButton buttonStyle="btn" text="2" />
            <NumberButton buttonStyle="btn" text="3" />
            <NumberButton buttonStyle="btn" text="4" />
            <NumberButton buttonStyle="btn" text="5" />
            <NumberButton buttonStyle="btn" text="6" />
            <NumberButton buttonStyle="btn" text="7" />
            <NumberButton buttonStyle="btn" text="8" />
            <NumberButton buttonStyle="btn" text="9" />
          </div>
          <ActionButton text="0" />
        </div>
        <div className="operatorContainer">
          <OperatorButton text="÷"/>
          <OperatorButton text="x"/>
          <OperatorButton text="-"/>
          <OperatorButton text="÷"/>
          <OperatorButton text="="/>
        </div>
      </section>
    </Fragment>
  );
};

export default ClearNumberContainer;
