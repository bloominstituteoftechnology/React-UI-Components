import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className='display'>
    <button className = {
            `inner-display ${props.customStyleProp}`
        } > {props.text} </button> 
</div>
    );
};

export default CalculatorDisplay;