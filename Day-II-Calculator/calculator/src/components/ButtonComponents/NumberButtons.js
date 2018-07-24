import React from 'react';
import './Button.css';

const ButtonMaker = props => {
    return <div className={`button-style ${props.buttonStyle}`} onClick={ () => sendToDisplay(props.text)}>{props.text}</div>
}

const NumberContainer  = props => {

  return (
    <div className="number-container-style">
      <ButtonMaker text="Clear" buttonStyle="three-wide"/>
      <ButtonMaker text="/" buttonStyle="action-style" />
      <ButtonMaker text="7" />
      <ButtonMaker text="8" />
      <ButtonMaker text="9" />
      <ButtonMaker text="X" buttonStyle="action-style" />
      <ButtonMaker text="4" />
      <ButtonMaker text="5" />
      <ButtonMaker text="6" />
      <ButtonMaker text="-" buttonStyle="action-style" />
      <ButtonMaker text="1" />
      <ButtonMaker text="2" />
      <ButtonMaker text="3" />
      <ButtonMaker text="+" buttonStyle="action-style" />
      <ButtonMaker text="0" buttonStyle="three-wide"/>
      <ButtonMaker text="=" buttonStyle="action-style" />
    </div>
  );
};

const sendToDisplay = (x) => {
  console.log(x);
   return x;

}

export default NumberContainer;
