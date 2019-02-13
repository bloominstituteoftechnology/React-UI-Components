import React from 'react';
import './Display.css';
import SolutionDisplay from './SolutionDisplay.js'
import NumberButton from '../ButtonComponents/NumberButton.js'
import ActionButton from '../ButtonComponents/ActionButton.js'
//import ActionButton from '../ButtonComponents/ClearButton.js'

const CalculatorDisplay = () => {
    return (<div class="cal-dis">
    <SolutionDisplay />
    <NumberButton buttonStyle="clear-b" text="clear" />
    <ActionButton text="+"/>
    <ActionButton text="-"/>
    <ActionButton text="x"/>
    <ActionButton text="%"/>
    <ActionButton text="="/>
    <NumberButton buttonStyle="num-b" text="1"/>
    <NumberButton buttonStyle="num-b" text="2"/>
    <NumberButton buttonStyle="num-b" text="3"/>
    <NumberButton buttonStyle="num-b" text="4"/>
    <NumberButton buttonStyle="num-b" text="5"/>
    <NumberButton buttonStyle="num-b" text="6"/>
    <NumberButton buttonStyle="num-b" text="7"/>
    <NumberButton buttonStyle="num-b" text="8"/>
    <NumberButton buttonStyle="num-b" text="9"/>
    <NumberButton buttonStyle="num-0" text="0"/>
    </div> );}

export default CalculatorDisplay;