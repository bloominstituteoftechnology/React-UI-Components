import React from 'react';
import './Button.css';

function NumberButton ({number, operator, actionOperator}) {
    return (
        <div className={`number-button ${operator ? 'operator' : ''}`}>{number}</div>       
    )
}

export default NumberButton