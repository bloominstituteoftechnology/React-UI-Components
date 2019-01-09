import React from 'react';
import './Display.css';

import Result from '../ButtonComponents/Result';
import NumberButton from '../ButtonComponents/NumberButton'
import ActionButton from '../ButtonComponents/ActionButton';

const NumbersObj = {
    num0: 0,
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4,
    num5: 5,
    num6: 6,
    num7: 7,
    num8: 8,
    num9: 9,
    num10: 'clear'
}

const ActionObj = {
    divide: "%",
    multiply: "X",
    subtract: "-",
    add: "+",
    equals: "="
}

function CalculatorDisplay() {
    return (
        <div className="CalculatorDisplay">
            <div>
                <Result />
            </div>
            <div className="Display">

                <div className="numSec">
                    <div>
                        <NumberButton num={NumbersObj.num10} />
                    </div>

                    <div className="Nums">
                        <NumberButton num={NumbersObj.num7} />
                        <NumberButton num={NumbersObj.num8} />
                        <NumberButton num={NumbersObj.num9} />
                        <NumberButton num={NumbersObj.num4} />
                        <NumberButton num={NumbersObj.num5} />
                        <NumberButton num={NumbersObj.num6} />
                        <NumberButton num={NumbersObj.num1} />
                        <NumberButton num={NumbersObj.num2} />
                        <NumberButton num={NumbersObj.num3} />
                    </div>


                    <div>
                        <NumberButton num={NumbersObj.num0} />
                    </div>

                </div>


                <div className="actSec">
                    <ActionButton action={ActionObj.divide} />
                    <ActionButton action={ActionObj.multiply} />
                    <ActionButton action={ActionObj.subtract} />
                    <ActionButton action={ActionObj.add} />
                    <ActionButton action={ActionObj.equals} />
                </div>
            </div>
        </div>

    )
}

export default CalculatorDisplay;