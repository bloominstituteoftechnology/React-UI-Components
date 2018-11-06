import React from 'react';
import './Display.css';
import CalculatorDisplay from './CalculatorDisplay'

function DisplayContainer(props) {
    return (
        <div className='display'>
            <CalculatorDisplay number='0' />
        </div>
    )
}

export default DisplayContainer;