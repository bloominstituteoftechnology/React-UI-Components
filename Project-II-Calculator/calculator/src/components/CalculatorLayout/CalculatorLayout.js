import React  from 'react';

import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';


const CalculatorLayout = props => {
    return(
        //Calculator Container
        <div className="cal-layout">
            {/* Calculator Display */}
            <div className="calc-display-box">
                <CalculatorDisplay numDisplay={props.actions[1]} />
            </div>
            {/* Calculator Body (Action Btns, Number Btns, Operator Btns) */}
            <div className="calc-body-box">
                {/* Left Column (Action Btns, Number Btns) */}
                <div className="calc-body-left-col">
                    {/* Clear Action Btn */}
                    <ActionButton buttonStyle={"actionBtn"} button={props.actions[0]}/>
                    
                    {/* Number Btns - Mapping Numbers Array to button */}
                    {props.num.map(number => {
                        return(
                            <NumberButton buttonStyle={"numberBtn"} button={number}/>
                        );
                    })}

                    {/* Zero Action Btn */}
                    <ActionButton buttonStyle={"actionBtn"} button={props.actions[1]}/>
                </div>
                {/* Right Column (Operator Btns) */}
                <div className="calc-body-right-col">
                    {/* Operator Btns - Mapping Operators Array to button */}
                    {props.operators.map(operator => {
                        return(
                            <NumberButton buttonStyle={"operatorBtn"} button={operator} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CalculatorLayout;