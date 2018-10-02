import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className="numberButton">{props.number.position}</div>
    )
}

export default NumberButton;