import React from 'react';
import './Display.css';


const CalculatorDisplay = props => {
    return(
        <div className="calc-display">
            <strong>
                <h1 className="numDisplay">
                    {props.numDisplay}
                </h1>
            </strong>
        </div>
    );
}

export default CalculatorDisplay;