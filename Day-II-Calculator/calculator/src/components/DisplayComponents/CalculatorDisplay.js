import React from 'react';


const CalculatorDisplay = props => {
    return(
        <div className="calc-container">
            <h1>{props.nums}</h1>
            <h2>{props.actions}</h2>
            <h3>{props.operators}</h3>
        </div>
    );
}


export default CalculatorDisplay;