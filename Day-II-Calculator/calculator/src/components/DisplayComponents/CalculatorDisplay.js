import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return(
        <div className='display'>{props.display}</div>
    );
}

CalculatorDisplay.defaultProps = {
    display: "0"
}

export default CalculatorDisplay;