import React from 'react';
import './Button.css';

const NumberButton = props => {
  return(
    <button value={props.value} className={`btn-default ${props.customButton}`} onClick={props.clickDoer}>{props.value}</button>
  );
}

export default NumberButton;
