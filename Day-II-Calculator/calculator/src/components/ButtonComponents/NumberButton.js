import React from 'react';
import './Button.css';

const NumberButton = props => {
  return(
    <button className={`numBtn ${props.style}`}>{props.text}</button>
  );
};

NumberButton.defaultProps = {
  text: 'err',

}

export default NumberButton;
