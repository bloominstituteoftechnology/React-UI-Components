import React from 'react';
import './Button.css';

const NumberButton = props => {
    return(
      <button className={`num-btn ${props.buttonStyle}`}>{props.num}</button>
    ) 
};


export default NumberButton;
