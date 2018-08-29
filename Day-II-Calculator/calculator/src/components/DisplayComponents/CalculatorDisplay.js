import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className='calc-display'>
            <input type='text' readOnly value={props.problem}/>
            <input type='text' readOnly value={props.solution}/>
        </div>
    )
}

export default CalculatorDisplay;