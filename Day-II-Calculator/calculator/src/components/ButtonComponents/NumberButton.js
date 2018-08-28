import React from 'react';
import './Button.css';


function NumberButton (props) {
    return (
        <button className={`${props.style} ${props.number}`}>{props.text}</button>  
    )
}

export default NumberButton;