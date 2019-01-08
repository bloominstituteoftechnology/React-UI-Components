import React from 'react';
import './Display.css';

import { ActionButton } from '../ButtonComponents/ActionButton';
import { NumberButton } from '../ButtonComponents/NumberButton';
import { MathButton } from '../ButtonComponents/MathButton';

class CalculatorDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
    }
    render() {
    return (
        <div class="calculatorfull">
            <div class="totalfield"></div>
            <div class="calcinputs">
                <div class="clear">
                    <ActionButton actionvalue="clear" />
                </div>
                <div class="numbuttons">
                    <NumberButton numvalue="7" />
                    <NumberButton numvalue="8" />
                    <NumberButton numvalue="9" />
                    <NumberButton numvalue="4" />
                    <NumberButton numvalue="5" />
                    <NumberButton numvalue="6" />
                    <NumberButton numvalue="1" />
                    <NumberButton numvalue="2" />
                    <NumberButton numvalue="3" />
                </div>
                <div class="zero">
                    <ActionButton actionvalue="0" />
                </div>
            </div>
            <div class="mathbuttons">
                <MathButton mathbtn="%" />
                <MathButton mathbtn="X" />
                <MathButton mathbtn="-" />
                <MathButton mathbtn="+" />
                <MathButton mathbtn="=" />
            </div>
        </div>
    );
}
}


export default CalculatorDisplay;