import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <div className="number-button-wrapper">
            <button className={props.number.buttonStyle}>{props.number.text}</button>
        </div>
    ); 
}

export default NumberButton;