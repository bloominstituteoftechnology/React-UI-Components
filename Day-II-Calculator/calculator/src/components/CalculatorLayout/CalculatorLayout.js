import React from 'react';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';




const CalculatorLayout = props => {
    return(
        <div className="calc-container">
            <div className="calc-display">
                <CalculatorDisplay />
            </div>
            <div className="calc-body">
                <div className="left-column">
                    <div className="action-btn-contaner">
                    <ActionButton class={"actionBtn"} text={props.actions[1]}/>
                    </div>
                    <div className="numbers-container">
                    {props.nums.map(number => {
                        return (
                            <NumberButton text={number} class={"numberBtn"} />
                        );
                    })}

                    </div>
                    <div className="action-btn-container">
                    <ActionButton class={"actionBtn"} text={props.actions[0]}/>
                    </div>
                </div>
                <div className="right-column">
                </div>
            </div>
            
        </div>
    );
}


export default CalculatorLayout;


// <h1>{props.nums}</h1>
// <h2>{props.actions}</h2>
// <h3>{props.operators}</h3>