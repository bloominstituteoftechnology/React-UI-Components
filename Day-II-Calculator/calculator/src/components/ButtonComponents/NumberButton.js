import React from 'react';
import './Button.css';


const NumberButton = props => {
  return (
    <div className="btn-small">
      <button className={props.buttonStyle}>{props.text}</button>
    </div>
  )
}

export default NumberButton;