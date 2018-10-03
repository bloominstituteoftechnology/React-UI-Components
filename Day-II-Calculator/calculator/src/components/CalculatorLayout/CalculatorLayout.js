import React from 'react';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';
import ActionButton from '../ButtonComponents/ActionButton';




const CalculatorLayout = props => {
    return(
        <div className="calc-container">
            <div className="calc-display">
                <CalculatorDisplay />
            </div>
            <div className="calc-body">
            <div className="left-column">
                <ActionButton class={""} text={props.actions[1]}/>
                <ActionButton class={""} text={props.actions[0]}/>
            </div>
            <div className="right-column"></div>
            </div>
            
        </div>
    );
}


export default CalculatorLayout;


// <h1>{props.nums}</h1>
// <h2>{props.actions}</h2>
// <h3>{props.operators}</h3>