import React from 'react';
import './Button.css';


function NumberButton (props) {
    return (
        <button className={`num-btn ${props.buttonStyle}`}>{props.text}</button>
    );
}

export default NumberButton;