import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button 
            className={`number-btn ${props.number}`}>
            {props.text}
        </button>
    );
};

export default NumberButton;