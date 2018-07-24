import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className="number-buttons">
            <button className={props.buttonStyle}>{props.text}</button>
        </div>
    )
};

export default NumberButton;