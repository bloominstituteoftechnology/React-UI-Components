import React from 'react';
import './NumPad.css';
import NumberButton from './NumberButton.js';
import ActionButton from './ActionButton.js';

const NumPad = () => {
    return (
        <div className="number-pad">
            <div className="nums">
                <ActionButton buttonStyle="big-buttons" text="clear" />
                <div className="nums-row">
                    <NumberButton buttonStyle="num" text="7" />
                    <NumberButton buttonStyle="num" text="8" />
                    <NumberButton buttonStyle="num" text="9" />
                </div>
                <div className="nums-row">
                    <NumberButton buttonStyle="num" text="4" />
                    <NumberButton buttonStyle="num" text="5" />
                    <NumberButton buttonStyle="num" text="6" />
                </div>
                <div className="nums-row">
                    <NumberButton buttonStyle="num" text="1" />
                    <NumberButton buttonStyle="num" text="2" />
                    <NumberButton buttonStyle="num" text="3" />
                </div>
                <ActionButton buttonStyle="big-buttons" text="0" />
            </div>
            <div className="action">
                <NumberButton buttonStyle="action-button" text="&divide;" />
                <NumberButton buttonStyle="action-button" text="&times;" />
                <NumberButton buttonStyle="action-button" text="&minus;" />
                <NumberButton buttonStyle="action-button" text="&#43;" />
                <NumberButton buttonStyle="action-button" text="&#61;" />
            </div>
        </div>
    );
}

export default NumPad;