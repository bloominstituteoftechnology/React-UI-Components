import React from 'react';
import './Display.css';

const CalculatorDisplay = (props) => {
    console.log('ClaculatorDisplay props: ', props)
    return (
        <button className={`boxes ${props.customStyle}`}>{props.text}</button>
        )
}

export default CalculatorDisplay;
