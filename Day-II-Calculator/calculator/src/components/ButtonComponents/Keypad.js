import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const Keypad = () => {
    return (
        <div className="keypad">
            <ActionButton buttonStyle="action clear" text="clear" />
            <div className="number-box">
                <NumberButton buttonStyle="number top left" text="7"/>
                <NumberButton buttonStyle="number top center" text="8"/>
                <NumberButton buttonStyle="number top right" text="9"/>
                <NumberButton buttonStyle="number middle left" text="4"/>
                <NumberButton buttonStyle="number middle center" text="5"/>
                <NumberButton buttonStyle="number middle right" text="6"/>
                <NumberButton buttonStyle="number bottom left" text="1"/>
                <NumberButton buttonStyle="number bottom center" text="2"/>
                <NumberButton buttonStyle="number bottom right" text="3"/>
            </div>
            <ActionButton buttonStyle="action zero" text="0" />
        </div>
    )
};

export default Keypad;