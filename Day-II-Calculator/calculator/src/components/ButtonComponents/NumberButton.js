import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={`button-container ${props.bgColor}`}>
            {props.text}
        </button>
    );
};

export default NumberButton;