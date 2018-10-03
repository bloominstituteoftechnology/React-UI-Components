import React from 'react';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';




const CalculatorLayout = props => {
    return(
        <div className="calc-container">
            <div className="calc-display">
                <CalculatorDisplay />
            </div>
            <div className="calc-body">
            <h1>{props.nums}</h1>
            <h2>{props.actions}</h2>
            <h3>{props.operators}</h3>
            </div>
            
        </div>
    );
}


export default CalculatorLayout;