import React from 'react';
import './Display.css';

import ResultScreen from '../DisplayComponents/ResultScreen'
import DisplayLineLARGE from '../DisplayComponents/DisplayLineLARGE'
import DisplayLineSTANDARD from '../DisplayComponents/DisplayLineSTANDARD'


const CalculatorDisplay = props => {
    return (
        <div className="container-calc">
            <ResultScreen />
            <DisplayLineLARGE />
            <DisplayLineSTANDARD />
            <DisplayLineSTANDARD />
            <DisplayLineSTANDARD />
            <DisplayLineLARGE />
        </div>
    )
}

export default CalculatorDisplay;