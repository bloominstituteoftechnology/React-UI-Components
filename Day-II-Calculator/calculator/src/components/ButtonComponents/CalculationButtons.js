import React from 'react';
import './Button.css';

const CalculationButtons = props => {
    return (
        <button className='calcBtns'>{props.icon}</button>
    );
};

export default CalculationButtons;