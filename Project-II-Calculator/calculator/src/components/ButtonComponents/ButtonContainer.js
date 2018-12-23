import React from 'react';
import './Button.css';
import BigButton from './BigButton';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const bigButtons = ['clear', 0];
const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const actionButtons = ['\u00F7', '\u00D7', '\u2212', '\u002B', '\u003D'];

const ButtonContainer = props => {
    return (
        <div className="button-container">
            <div className="numbers">
                <BigButton content={bigButtons[0]} />
                {numberButtons.map(number => ( <NumberButton number={number} />))}
                <BigButton content={bigButtons[1]} />
            </div>
            <div className="actions">
                {actionButtons.map(item => ( <ActionButton content={item} />))}
            </div>
        </div>
    );
};


export default ButtonContainer;