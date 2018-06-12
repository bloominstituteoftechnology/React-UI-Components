import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div 
            className={`number-button-styles &{props.customTypeStyle}`}>
                {props.text}
        </div>
    );
};

export default NumberButton;