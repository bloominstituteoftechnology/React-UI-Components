import React from 'react';
import './Button.css';

const numbers = Array.from(Array(9).keys());


let NumberButton = (props) => {
    return (
        <div className={props.buttonStyle}>
            {props.text}
        </div>   
    )
    
}

export default NumberButton;