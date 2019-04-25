import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  return (
    <div className="NumberButton">
      <span className={props.buttonStyle}>{props.label}</span>
    </div>
  )
}

export default NumberButton
