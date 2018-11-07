import React from 'react';
import './Button.css';


function NumberButton(props) {
    return (
        <div className="buttons">
        <button>{props.btn.text}</button>
        </div>
        // {props.buttonStyle}
        
    )
}

export default NumberButton;
