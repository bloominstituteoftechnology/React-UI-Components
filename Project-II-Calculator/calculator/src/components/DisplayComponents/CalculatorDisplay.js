import React from 'react';
import './Display.css';

function CalculatorDisplay(props){
    return(
        <div className='display'>
            <h1>{props.display}</h1>
        </div>
    )
}

export default CalculatorDisplay;