import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';


const NumberButtonContainer = () => {
    return (
        <div className="numberContainer">
            <NumberButton number="0" className="zero"/>
            <NumberButton number="1"/>
            <NumberButton number="2"/>
            <NumberButton number="3"/>
            <NumberButton number="4"/>
            <NumberButton number="5"/>
            <NumberButton number="6"/>
            <NumberButton number="7"/>
            <NumberButton number="8"/>
            <NumberButton number="9"/>
        </div>
    )
}

export default NumberButtonContainer;