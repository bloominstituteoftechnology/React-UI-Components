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

                    <div className="GridNumClear">
                        <NumberButton num={NumbersObj.num10} />
                    </div>
                    <div className="GridNum7">
                        <NumberButton num={NumbersObj.num7} />
                    </div>
                    <div className="GridNum8">
                        <NumberButton num={NumbersObj.num8} />
                    </div>
                    <div className="GridNum9">
                        <NumberButton num={NumbersObj.num9} />
                    </div>
                    <div className="GridNum4">
                        <NumberButton num={NumbersObj.num4} />
                    </div>
                    <div className="GridNum5">
                        <NumberButton num={NumbersObj.num5} />
                    </div>
                    <div className="GridNum6">
                        <NumberButton num={NumbersObj.num6} />
                    </div>
                    <div className="GridNum1">
                        <NumberButton num={NumbersObj.num1} />
                    </div>
                    <div className="GridNum2">
                        <NumberButton num={NumbersObj.num2} />
                    </div>
                    <div className="GridNum3">
                        <NumberButton num={NumbersObj.num3} />
                    </div>
                    <div className="GridNumZero">
                        <NumberButton num={NumbersObj.num0} />
                    </div>

                    <div className="divide">
                        <ActionButton action={ActionObj.divide} />
                    </div>
                    <div className="multiply">
                        <ActionButton action={ActionObj.multiply} />
                    </div>
                    <div className="subtract">
                        <ActionButton action={ActionObj.subtract} />
                    </div>
                    <div className="add">
                        <ActionButton action={ActionObj.add} />
                    </div>
                    <div className="equals">
                        <ActionButton action={ActionObj.equals} />
                    </div>


                </div>

            </div>
        </div>

    )
}

export default CalculatorDisplay;