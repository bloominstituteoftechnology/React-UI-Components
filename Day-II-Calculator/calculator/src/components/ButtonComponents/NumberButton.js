import React from 'react';
import './Button.css';

const NumberButton = props => {
  return(
    <button className={`btn numBtn ${props.styles}`}>{props.text}</button>
  );
};

NumberButton.defaultProps = {
  text: 'err',

}

export default NumberButton;
