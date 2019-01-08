import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <div className="reg-button">{props.symbol}</div>
    )
}

export default NumberButton;