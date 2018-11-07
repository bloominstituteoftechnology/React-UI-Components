import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className="ind-number-buttons">
            {props.button}
        </div>
    )
}

export default NumberButton;