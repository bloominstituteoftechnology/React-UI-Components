import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = props => <button className={`calculator-display-styles ${props.buttonStyle}`}>{props.text}</button>

export default CalculatorDisplay;