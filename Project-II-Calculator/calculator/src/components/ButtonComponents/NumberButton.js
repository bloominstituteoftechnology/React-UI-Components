import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button className = {props.buttonStyle}>
            <span> {props.value} </span>
        </button>
    );
}

export default NumberButton;