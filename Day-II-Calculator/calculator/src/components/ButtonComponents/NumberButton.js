import React from 'react';
import './Button.css';

const NumberButton = props => (
  <button value={props.value} onClick={props.onClick} className={`sm-btn ${props.extraStyle}`}>{props.value}</button>
);

export default NumberButton;
