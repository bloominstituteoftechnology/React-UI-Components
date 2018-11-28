import React from 'react';
import './Display.css';

const CalculatorDisplay = props => (
    <div className='display'>
        <span>{props.display === null ? 0 : props.display}</span>
    </div>
);

export default CalculatorDisplay;