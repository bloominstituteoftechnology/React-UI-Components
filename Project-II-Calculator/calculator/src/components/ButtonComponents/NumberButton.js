import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div 
            className="num-button"
            onClick={props.handleInput}
        >
            {props.number}</div>
    );
};

export default NumberButton;