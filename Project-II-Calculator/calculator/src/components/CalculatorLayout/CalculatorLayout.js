import React  from 'react';

import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';


const CalculatorLayout = props => {
    return(
        <div className="cal-layout">
            <div className="calc-display-box">
                <CalculatorDisplay numDisplay={props.actions[1]} />
            </div>
            <div className="calc-body-box">
                <div className="calc-body-left-col">
                    <ActionButton buttonStyle={"actionBtn"} action={props.actions[0]}/>
                    {props.num.map(number => {
                        return(
                            <NumberButton buttonStyle={"numberBtn"} button={number}/>
                        );
                    })}
                    
                    <ActionButton buttonStyle={"actionBtn"} action={props.actions[1]}/>
                </div>
                <div className="calc-body-right-col">
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