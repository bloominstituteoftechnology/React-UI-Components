import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button 
            className={`number-button-styles ${props.customStyle}`}>
                <div>{props.text}</div>
        </button>
    );
};

export default NumberButton;