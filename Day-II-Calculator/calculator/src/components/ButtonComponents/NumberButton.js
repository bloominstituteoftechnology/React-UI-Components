import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <div className={props.buttonProp.class}>
            <h1>{props.buttonProp.symbol}</h1>
        </div>
    )
}

export default NumberButton;