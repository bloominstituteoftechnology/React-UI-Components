import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  return (
    <div className="NumberButton">
      <button className={props.buttonStyle}>{props.label}</button>
    </div>
  )
}

export default NumberButton