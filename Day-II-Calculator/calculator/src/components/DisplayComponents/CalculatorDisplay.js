import React from 'react';
import './Display.css';

const CalculatorDisplay = props => <input type ="text" id="display" placeholder= {props.placeholder} />

CalculatorDisplay.defaultProps = {
    placeholder: 0
}


export default CalculatorDisplay;