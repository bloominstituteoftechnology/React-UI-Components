import React from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay'

function ButtonContainer(){
    return(
        <div className="calculator">
        <CalculatorDisplay display="0"/>
        <div className="calculator-bottom">
            <div>
                <NumberButton number='clear' className="wide-button"/>
                <div className="number-container">
                    <NumberButton number='7'/>
                    <NumberButton number='8'/>
                    <NumberButton number='9'/>
                    <NumberButton number='4'/>
                    <NumberButton number='5'/>
                    <NumberButton number='6'/>
                    <NumberButton number='1'/>
                    <NumberButton number='2'/>
                    <NumberButton number='3'/>
                    <NumberButton number='0' className="wide-button"/>
                </div>
            </div>
            <div>
                <ActionButton action='-'/>
                <ActionButton action='x'/>
                <ActionButton action='-'/>
                <ActionButton action='+'/>
                <ActionButton action='='/>
            </div>
        </div>
        </div>
    )
}

export default ButtonContainer;