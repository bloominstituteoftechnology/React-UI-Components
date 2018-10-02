import React from 'react';
import './Display.css';

function CalculatorDisplay ({total}) {
    return (
        <div className="calc-display">{total}</div>
    )
}

export default CalculatorDisplay