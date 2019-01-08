import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <div className="reg-button">{props.text}</div>
    )
}

export default NumberButton;