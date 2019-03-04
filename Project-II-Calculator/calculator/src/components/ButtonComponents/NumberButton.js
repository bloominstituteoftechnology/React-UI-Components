import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={`numbers ${props.className}`}>{props.input}</button>
    )
}

export default NumberButton;





