import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ZeroButton from './ZeroButton';
import ClearButton from './ClearButton';
import ActionButton from './ActionButton';

const NumberButtonContainer = () => {
    return (
        <div className="button-container">
            <div className="number-container">
                <ZeroButton number="0"/>
                <NumberButton number="1"/>
                <NumberButton number="2"/>
                <NumberButton number="3"/>
                <NumberButton number="4"/>
                <NumberButton number="5"/>
                <NumberButton number="6"/>
                <NumberButton number="7"/>
                <NumberButton number="8"/>
                <NumberButton number="9"/>
                <ClearButton number="Clear"/>
            </div>
            <div className="action-button-container">
                <ActionButton action="/"/>
                <ActionButton action="x"/>
                <ActionButton action="-"/>
                <ActionButton action="+"/>
                <ActionButton action="="/>
            </div>
        </div>
    )
}

export default NumberButtonContainer;