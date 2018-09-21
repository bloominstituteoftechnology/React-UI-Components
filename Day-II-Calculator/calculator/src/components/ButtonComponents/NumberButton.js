import React from 'react';
import './Button.css';

const NumberButton = props => {
  return <div className="number-button">{props.number}</div>;
};

export default NumberButton;
