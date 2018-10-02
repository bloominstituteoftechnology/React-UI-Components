import React from 'react';
import './Button.css';


function NumberButton(props) {
    return <button className={props.number.buttonStyle}>{props.number.text}</button>
}
  
export default NumberButton;