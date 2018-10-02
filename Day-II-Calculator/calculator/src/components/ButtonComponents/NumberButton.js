import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className={props.buttonStyle}>
            <p>{props.text}</p>
        </div>
    );
}

export default NumberButton;