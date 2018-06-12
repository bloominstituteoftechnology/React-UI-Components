import React from 'react';
import './Button.css';

function NumberButton ({number}) {
    return (
        <div className="number-button">{number}</div>       
    )
}

export default NumberButton