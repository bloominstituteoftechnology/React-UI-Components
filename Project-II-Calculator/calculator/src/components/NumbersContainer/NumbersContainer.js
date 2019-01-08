import React from 'react'
import NumberButton from '../ButtonComponents/NumberButton'
import './NumbersContainer.css'

const NumbersContainer = props => {
    return(
        <div className="numbers-container">
            <NumberButton buttonStyle="wide-button" text="clear" numberClick={props.clear}/>
            <NumberButton buttonStyle="number-button" text="7" numberClick={props.numberClick}/>
            <NumberButton buttonStyle="number-button" text="8" numberClick={props.numberClick}/>
            <NumberButton buttonStyle="number-button" text="9" numberClick={props.numberClick}/>
            <NumberButton buttonStyle="number-button" text="4" numberClick={props.numberClick}/>
            <NumberButton buttonStyle="number-button" text="5" numberClick={props.numberClick}/>
            <NumberButton buttonStyle="number-button" text="6" numberClick={props.numberClick}/>
            <NumberButton buttonStyle="number-button" text="1" numberClick={props.numberClick}/>
            <NumberButton buttonStyle="number-button" text="2" numberClick={props.numberClick}/>
            <NumberButton buttonStyle="number-button" text="3" numberClick={props.numberClick}/>
            <NumberButton buttonStyle="wide-button" text="0" numberClick={props.numberClick}/>
        </div>
    )
}

export default NumbersContainer