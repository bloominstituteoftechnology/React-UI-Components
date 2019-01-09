import React from 'react';
import './Display.css';

function CalculatorDisplay(props){
       const total = props.state.join('');
    return(
        <div className="calculator-display-wrapper">
            <div className="display">{total}</div>
        </div>
    );
}

export default CalculatorDisplay;