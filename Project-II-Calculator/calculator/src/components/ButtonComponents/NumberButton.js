import React from 'react';
import './Button.css';

const OneButton = {
  buttonStyle: 'numberButton',
  text: '1'
};

const TwoButton = {
  buttonStyle: 'numberButton',
  text: '2'
};

const ThreeButton = {
  buttonStyle: 'numberButton',
  text: '3'
};

const FourButton = {
  buttonStyle: 'numberButton',
  text: '4'
};

const FiveButton = {
  buttonStyle: 'numberButton',
  text: '5'
};

const SixButton = {
  buttonStyle: 'numberButton',
  text: '6'
};

const SevenButton = {
  buttonStyle: 'numberButton',
  text: '7'
};

const EightButton = {
  buttonStyle: 'numberButton',
  text: '8'
};

const NineButton = {
  buttonStyle: 'numberButton',
  text: '9'
};

const NumberButton = (props) => {
  return (
    <div className='numbericButtons'>
      <button className={props.button.buttonStyle}>{props.button.text}</button>
    </div>
  );
}

const NumberButtons = () => {
  return (
    <div className='numbers'>
      <NumberButton button ={SevenButton} />
      <NumberButton button ={EightButton} />
      <NumberButton button ={NineButton} />
      <NumberButton button ={FourButton} />
      <NumberButton button ={FiveButton} />
      <NumberButton button ={SixButton} />
      <NumberButton button ={OneButton} />
      <NumberButton button ={TwoButton} />
      <NumberButton button ={ThreeButton} />
    </div>
  );
}

export default NumberButtons;