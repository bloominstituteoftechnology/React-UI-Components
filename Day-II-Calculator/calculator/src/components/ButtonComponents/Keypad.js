import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const Keypad = () => {
    return (
        <div className="keypad">
            <ActionButton buttonStyle="action clear" text="clear" />
            <div className="number-box">
                <NumberButton buttonStyle="number" text="7"/>
                <NumberButton buttonStyle="number" text="8"/>
                <NumberButton buttonStyle="number" text="9"/>
                <NumberButton buttonStyle="number" text="4"/>
                <NumberButton buttonStyle="number" text="5"/>
                <NumberButton buttonStyle="number" text="6"/>
                <NumberButton buttonStyle="number" text="1"/>
                <NumberButton buttonStyle="number" text="2"/>
                <NumberButton buttonStyle="number" text="3"/>
            </div>
            <ActionButton buttonStyle="action zero" text="0" />
        </div>
    )
};

export default Keypad;