import React from 'react';
import './Display.css';
import SolutionDisplay from './SolutionDisplay.js'
import NumberButton from '../ButtonComponents/NumberButton.js'
import ActionButton from '../ButtonComponents/ActionButton.js'

const CalculatorDisplay = () => {
    return (<div class="cal-dis">
    <SolutionDisplay />
    <ActionButton text="+"/>
    <ActionButton text="-"/>
    <ActionButton text="x"/>
    <ActionButton text="%"/>
    <ActionButton text="="/>
    <NumberButton buttonStyle="num-b" text="0"/>
    <NumberButton buttonStyle="num-b" text="0"/>
    <NumberButton buttonStyle="num-b" text="0"/>
    <NumberButton buttonStyle="num-b" text="0"/>
    <NumberButton buttonStyle="num-b" text="0"/>
    <NumberButton buttonStyle="num-b" text="0"/>
    <NumberButton buttonStyle="num-b" text="0"/>
    <NumberButton buttonStyle="num-b" text="0"/>
    <NumberButton buttonStyle="num-b" text="0"/>
    <NumberButton buttonStyle="num-b" text="0"/>
    <NumberButton buttonStyle="num-b" text="0"/>
    </div> );}

export default CalculatorDisplay;