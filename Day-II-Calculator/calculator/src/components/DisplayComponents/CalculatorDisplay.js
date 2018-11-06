import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    return (
        <div className='display'>
            <p className='value'>{props.value}</p>
        </div>
    )
}

export default CalculatorDisplay;