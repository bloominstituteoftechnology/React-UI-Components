import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <div className={`numberButton ${props.buttonWidth}`} onClick={() => props.whenClicked(props.value)}>
            {props.value}
        </div>
    );
}

export default NumberButton;