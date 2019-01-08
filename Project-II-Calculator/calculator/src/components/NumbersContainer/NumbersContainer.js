import React from 'react'
import NumberButton from '../ButtonComponents/NumberButton'
import './NumbersContainer.css'

const NumbersContainer = (props) => {
    return(
        <div className="numbers-container">
            <NumberButton buttonStyle="wide-button" text="clear"/>
            <NumberButton buttonStyle="number-button" text="7"/>
            <NumberButton buttonStyle="number-button" text="8"/>
            <NumberButton buttonStyle="number-button" text="9"/>
            <NumberButton buttonStyle="number-button" text="4"/>
            <NumberButton buttonStyle="number-button" text="5"/>
            <NumberButton buttonStyle="number-button" text="6"/>
            <NumberButton buttonStyle="number-button" text="1"/>
            <NumberButton buttonStyle="number-button" text="2"/>
            <NumberButton buttonStyle="number-button" text="3"/>
            <NumberButton buttonStyle="wide-button" text="0"/>
        </div>
    )
}

export default NumbersContainer