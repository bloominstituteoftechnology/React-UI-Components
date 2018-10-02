import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className={props.style}>
            <h1>{props.symbol}</h1>
        </div>
    )
}

export default NumberButton;