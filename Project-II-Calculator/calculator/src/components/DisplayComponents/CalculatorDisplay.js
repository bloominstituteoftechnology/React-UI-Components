import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className='calc-display'> 
            <p>{props.total}</p>
        </div>
    );
};

export default CalculatorDisplay;