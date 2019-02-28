import React from 'react';
import './Display.css';

import ResultDisplay from './resultDisplay';
import ClearButton from './clearBtn';
import MathButton from './mathButton';
import NumberButton from './numberBtn'

const CalculatorDisplay = props => {
    return (
        <div className="calcBody">
            <div className="content-row" data-line="1">
                <div className="component-border" data-number="result" >
                    <ResultDisplay />
                </div>
            </div>
            <div className="content-row" data-line="2" data-number="clear" >
                <div className="component-border" >
                    <ClearButton />
                </div>
                <div className="component-border" data-number="DIVIDE" >
                    <MathButton />
                </div>
            </div>

            <div className="content-row" data-line="3">
                <div className="component-border" data-number="7" >
                    <NumberButton />
                </div>

                <div className="component-border" data-number="8" >
                    <NumberButton />
                </div>
                <div className="component-border" data-number="9" >
                    <NumberButton />
                </div>
                <div className="component-border" data-number="MULTIPLY" >
                    <MathButton />
                </div>

            </div>

            <div className="content-row" data-line="4">
                <div className="component-border" data-number="4">
                    <NumberButton />
                </div>
                <div className="component-border" data-number="5">
                    <NumberButton />
                </div>
                <div className="component-border" data-number="6">
                    <NumberButton />
                </div>
                <div className="component-border" data-number="SUBTRACT">
                    <MathButton />
                </div>
            </div>

            <div className="content-row" data-line="5">
                <div className="component-border" data-number="1">
                    <NumberButton />
                </div>
                <div className="component-border" data-number="2">
                    <NumberButton />
                </div>
                <div className="component-border" data-number="3">
                    <NumberButton />
                </div>
                <div className="component-border" data-number="4">
                    <MathButton />
                </div>
            </div>
            <div className="content-row" data-line="6">
                <div className="component-border" >
                    <NumberButton />
                </div>
                <div className="component-border" >
                    <MathButton />
                </div>
            </div>

        </div >
    )
}

export default CalculatorDisplay;