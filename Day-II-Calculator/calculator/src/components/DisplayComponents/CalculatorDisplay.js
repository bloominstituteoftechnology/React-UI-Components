import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = (props) => {
    console.log('ClaculatorDisplay props: ', props)
    return (
        <button className={`boxes ${props.customStyle}`}>{props.text}</button>
        )
}

export default CalculatorDisplay;
