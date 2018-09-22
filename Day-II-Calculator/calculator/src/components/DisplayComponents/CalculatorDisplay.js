import React from 'react';
import './Display.css';

const CalcDisplay=(props)=>{
    return(
    <div className='calc-display'>
    <div className='calc-text'>{props.sum}</div>
    </div>
    )
}

export default CalcDisplay;