import React from "react";
import "./Button.css";

const NumberBtn = props => <div className={`rectangle`}>{props.text}</div>;

const NumberBtnContainer = props => {
  return <NumberBtn text={props.text} />;
};

export default NumberBtnContainer;
