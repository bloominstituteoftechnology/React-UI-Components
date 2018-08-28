import React from 'react';
import './Display.css';

const CalculatorDisplay = (props)=>{
    return (
        <div className='displaybox'>
            <h1 className='defaultdisplay'>{props.default}</h1>
        </div>
    );
}

export default CalculatorDisplay;