import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div className="numberbuttonContainer">
      <button className={props.buttonStyle}>{props.text}</button>
    </div>
  )
}

export default NumberButton