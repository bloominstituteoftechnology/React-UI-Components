import React from 'react';
import './Display.css';

import ResultScreen from '../DisplayComponents/ResultScreen'
import DisplayLineLARGE from '../DisplayComponents/DisplayLineLARGE'
import DisplayLineSTANDARD from '../DisplayComponents/DisplayLineSTANDARD'

import myProps from '../props'

const CalculatorDisplay = props => {


    return (
        <div className="container-calc">

            <ResultScreen displayProps={myProps.line1} />
            <DisplayLineLARGE displayProps={myProps.line2} />
            <DisplayLineSTANDARD displayProps={myProps.line3}/>
            {/* <DisplayLineSTANDARD />
            <DisplayLineSTANDARD /> */}
            {/* <DisplayLineLARGE /> */}
        </div>
    )
}

export default CalculatorDisplay;


