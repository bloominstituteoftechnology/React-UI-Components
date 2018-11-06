import React from 'react';
import './Display.css';

const CalculatorDisplay = props => <button className={`calculator-display-styles ${props.buttonStyle}`}>{props.text}</button>


export default CalculatorDisplay;