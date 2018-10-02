import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const numberButtons = [
    {number: 1},
    {number: 2},
    {number: 3},
    {number: 4},
    {number: 5},
    {number: 6},
    {number: 7},
    {number: 8},
    {number: 9}
]

const actionButtons = [
    {action: 0},
    {action: 'clear'}
]

const MainButtons = props => {
    return (
        <div className="main-buttons">
        <div className="action">
            {actionButtons.map(action => {
            return <ActionButton action={action} />;
            })}
        </div>

        <div className="numbers">
            {numberButtons.map(number => {
        return <NumberButton number={number} />;
      })}
        </div>

        <div className="action">
            {actionButtons.map(action => {
            return <ActionButton action={action} />;
            })}
        </div>
        </div>
    );
};

export default MainButtons;