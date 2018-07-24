import React from 'react';
import './Button.css';
import ClearButton from './ClearButton.js';

const ButtonMaker = props => {
    return <div className={`button-style ${props.buttonStyle}`}>{props.text}</div>
}

const NumberContainer  = props => {
  return (
    <div className="number-container-style">
      <ButtonMaker text="0" buttonStyle="three-wide"/>
      <ButtonMaker text="1" />
      <ButtonMaker text="2" />
      <ButtonMaker text="3" />
      <ButtonMaker text="4" />
      <ButtonMaker text="5" />
      <ButtonMaker text="6" />
      <ButtonMaker text="7" />
      <ButtonMaker text="8" />
      <ButtonMaker text="9" />
      <ClearButton text="Clear" buttonStyle="three-wide button-style"/>
    </div>
  );
};


export default NumberContainer;
