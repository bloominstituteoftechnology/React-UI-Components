import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
import { PadNumbers } from "../data/Calc";
import { PadAction } from "../data/Calc";


function CalculatorDisplay(){
    return(
        <div className="calc">
            <div className="calcScreen">0</div>
            <div className="numPad">
                <div className="wideButton">clear</div>
                    {
                        PadNumbers.map( num => {
                        return <NumberButton class="numButton" text={num.text}/>
                        })
                    }
                <div className="wideButton">0</div>
            </div>

             <div className="actionPad">
                {
                    PadAction.map( action => {
                        return <ActionButton class="actionButton" text={action.text}/>
                    })
                }
            </div>
        </div>
    );
}

 export default CalculatorDisplay;