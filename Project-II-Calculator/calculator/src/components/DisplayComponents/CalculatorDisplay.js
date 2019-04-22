import React from 'react'
import './Display.css'
import ActionBtn from '../ButtonComponents/ActionButton'
import NumberBtn from'../ButtonComponents/NumberButton'

export default function CalculatorDisplay(props) {
    return (
        <article className="calculator-display">
            <div className="row" id="display"> 0</div>

            <div className="row">
                <ActionBtn content="clear" large />
                <ActionBtn content="/" />
            </div>

            <div className="row">
                <NumberBtn content="7" />
                <NumberBtn content="8" />
                <NumberBtn content="9" />
                <ActionBtn content="x" />
            </div>
            <div className="row">
                <NumberBtn content="4" />
                <NumberBtn content="5" />
                <NumberBtn content="6" />
                <ActionBtn content="-" />
            </div>
            <div className="row">
                <NumberBtn content="1" />
                <NumberBtn content="2" />
                <NumberBtn content="3" />
                <ActionBtn content="+" />
            </div>
            <div className="row">
                <NumberBtn content="0" large />
                <ActionBtn content="=" />
            </div>
        </article>

    )
}