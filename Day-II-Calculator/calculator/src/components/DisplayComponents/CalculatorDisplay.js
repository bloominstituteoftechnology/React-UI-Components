import React from 'react';
import './Display.css';

const CalcDisplay = props => {
    return (
        <div className="calc-display">
        {props.total}
        </div>
    )
}

export default CalcDisplay;