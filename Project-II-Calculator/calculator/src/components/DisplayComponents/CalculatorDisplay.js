import React from 'react';
import './Display.css';

function CalculatorDisplay(props){
    return(
        <div className="calculator-display-wrapper">
            <div className="display">{props.state.total}</div>
        </div>
    );
}

export default CalculatorDisplay;