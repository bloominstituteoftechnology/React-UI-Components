import React from 'react';
import './Display.css';
import NumberButton from "../ButtonComponents/NumberButton"
import ActionButton from "../ButtonComponents/ActionButton"
import { numPadNumbers } from "../data/CalcData"
import { numPadAction } from "../data/CalcData"


function CalculatorDisplay(){
    return(
        <div className="calc">
            <div className="calc-screen">0</div>
            <div className="num-pad">
                <div className="wide-button">clear</div>
                    {
                        numPadNumbers.map( num => {
                        return <NumberButton class="num-button" text={num.text}/>
                        })
                    }
                <div className="wide-button">0</div>
            </div>

            <div className="action-pad">
                {
                    numPadAction.map( action => {
                        return <ActionButton class="action-button" text={action.text}/>
                    })
                }
            </div>
        </div>
    );
}

export default CalculatorDisplay;