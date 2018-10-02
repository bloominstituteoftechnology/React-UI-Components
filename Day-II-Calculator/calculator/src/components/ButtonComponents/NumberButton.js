import React from 'react';
import './Button.css';


const NumberButton = props => {
  return (
    <div>
     <button className={`button ${props.color}`}>{props.text}</button>
    </div>
  )
}

export default NumberButton;