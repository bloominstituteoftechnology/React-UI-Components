import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
        <div className="numberButton">
            {props.value}
        </div>
    );
}

export default NumberButton;