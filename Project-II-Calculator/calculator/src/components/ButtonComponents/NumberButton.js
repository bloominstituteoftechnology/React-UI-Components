import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <div className="number-button-wrapper">
            <button onClick={props.onClick} className={props.number.buttonStyle} value={props.number.text}>{props.number.text}</button>
        </div>
    ); 
}

export default NumberButton;