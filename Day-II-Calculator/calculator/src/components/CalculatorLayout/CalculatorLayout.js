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

                    {/* Action Buttons */}
                    <ActionButton class={"actionBtn"} text={props.actions[1]}/>
          
                    {/* Number Buttons */}
                    <div className="numbers-container">
                    {props.nums.map(number => {
                        return (
                            <NumberButton text={number} class={"numberBtn"} />
                        );
                    })}
                    </div>
            
                    {/* Action Button */}
                    <ActionButton class={"actionBtn zero"} text={props.actions[0]}/>
    
                </div>
                <div className="right-column">

                    <div className="operators-container">
                    {props.operators.map(operator => {
                        return (
                            <NumberButton text={operator} class={"operatorBtn"} />
                        );
                    })}
                    </div>
                </div>
            </div>
            
        </div>
    );
}


export default CalculatorLayout;


