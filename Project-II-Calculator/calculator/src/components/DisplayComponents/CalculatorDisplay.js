import React from 'react'
import './Display.css'
import ActionBtn from '../ButtonComponents/ActionButton'
import NumberBtn from'../ButtonComponents/NumberButton'

export default function CalculatorDisplay({updateDisplay}) {
    return (
        <article className="calculator-display">
            <div className="row" id="display"> 0</div>

            <div className="row">
                <ActionBtn 
                    content="clear"
                    large 
                    updateDisplay={updateDisplay}  
                />
                <ActionBtn content="/" updateDisplay={updateDisplay} />
            </div>

            <div className="row">
                <NumberBtn content="7" updateDisplay={updateDisplay} />
                <NumberBtn content="8" updateDisplay={updateDisplay} />
                <NumberBtn content="9" updateDisplay={updateDisplay} />
                <ActionBtn content="x" updateDisplay={updateDisplay} />
            </div>
            <div className="row">
                <NumberBtn content="4" updateDisplay={updateDisplay} />
                <NumberBtn content="5" updateDisplay={updateDisplay} />
                <NumberBtn content="6" updateDisplay={updateDisplay} />
                <ActionBtn content="-" updateDisplay={updateDisplay} />
            </div>
            <div className="row">
                <NumberBtn content="1" updateDisplay={updateDisplay} />
                <NumberBtn content="2" updateDisplay={updateDisplay} />
                <NumberBtn content="3" updateDisplay={updateDisplay} />
                <ActionBtn content="+" updateDisplay={updateDisplay} />
            </div>
            <div className="row">
                <NumberBtn 
                    content="0" 
                    large
                    updateDisplay={updateDisplay}     
                />
                <ActionBtn content="=" updateDisplay={updateDisplay} />
            </div>
        </article>

    )
}