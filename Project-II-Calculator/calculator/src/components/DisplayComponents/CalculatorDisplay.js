import React from 'react';
import './Display.css';

import ResultScreen from '../DisplayComponents/ResultScreen'
import DisplayLineLARGE from '../DisplayComponents/DisplayLineLARGE'
import DisplayLineSTANDARD from '../DisplayComponents/DisplayLineSTANDARD'


const CalculatorDisplay = props => {
    return (
        <div className="container-calc">
            <ResultScreen />
            <DisplayLineLARGE lineProps={line2_PROPS} />
            <DisplayLineSTANDARD lineProps={line3_PROPS} />
            <DisplayLineSTANDARD lineProps={line4_PROPS} />
            <DisplayLineSTANDARD lineProps={line5_PROPS} />
            <DisplayLineLARGE lineProps={line6_PROPS} />
        </div>
    )
}

export default CalculatorDisplay;

// -- // props needed
    const line2_PROPS = {
        LARGE_buttonText: 'CLEAR',
        MATH_buttonText: '÷'

    }
    const line3_PROPS = {
        STANDARD_buttonText_1: 7,
        STANDARD_buttonText_2: 8,
        STANDARD_buttonText_3: 9,
        MATH_buttonText: 'x'
    }
    const line4_PROPS = {
        STANDARD_buttonText_1: 4,
        STANDARD_buttonText_2: 5,
        STANDARD_buttonText_3: 6,
        MATH_buttonText: '-'
    }
    const line5_PROPS = {
        STANDARD_buttonText_1: 1,
        STANDARD_buttonText_2: 2,
        STANDARD_buttonText_3: 3,
        MATH_buttonText: '+'
    }
    const line6_PROPS = {
        LARGE_buttonText: 0,
        MATH_buttonText: '='
    }