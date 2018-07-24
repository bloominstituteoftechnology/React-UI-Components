import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  return (
    <div className={`${props.buttonStyle} `}>
      <button className={"bordered number-btn button-display"}>{props.text}</button>
    </div>
  )
}

export default NumberButton;
