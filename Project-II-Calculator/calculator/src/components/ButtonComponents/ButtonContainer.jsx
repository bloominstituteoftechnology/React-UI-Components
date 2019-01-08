import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import WideButton from "./WideButton";

const ButtonContainer = props => {

  return (
    <div className="button-container">
      <WideButton text="clear" fontWeight="light" numbers={props.numbers} />
      {props.numbers.map((number, index) => { return <NumberButton text={number} key={"number" + index} />; })}
      <WideButton text="0" />
    </div>
  );
};

export default ButtonContainer;