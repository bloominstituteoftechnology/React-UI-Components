import React from 'react';
import './Display.css';
import NumberButton from "../ButtonComponents/NumberButton"
import ActionButton from "../ButtonComponents/ActionButton"

const numPadNumbers = [
    {
        "number":"seven",
        "text":7
    },
    {
        "number":"eight",
        "text":8
    },
    {
        "number":"nine",
        "text":9
    },
    {
        "number":"four",
        "text":4
    },
    {
        "number":"five",
        "text":5
    },
    {
        "number":"six",
        "text":6
    },
    {
        "number":"one",
        "text":1
    },
    {
        "number":"two",
        "text":2
    },
    {
        "number":"three",
        "text":3
    }
]

const numPadAction = [
    {
        "action":"divide",
        "text":"÷"
    },
    {
        "action":"multiply",
        "text":"x"
    },
    {
        "action":"subtract",
        "text":"–"
    },
    {
        "action":"add",
        "text":"+"
    },
    {
        "action":"result",
        "text":"="
    }
]

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
                    }
                    )
                }
            </div>
        </div>
    );
}

export default CalculatorDisplay;

{/* <ActionButton /> */}