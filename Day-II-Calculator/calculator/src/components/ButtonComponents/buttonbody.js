import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ActionButtonsArray = ['÷', 'x', '-', '+', '='];
const NumberButtonsArray = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear'];

const ButtonBody = () => {
    return (
        <div className="button-body">
            <div className="number-buttons">
            {NumberButtonsArray.map(button => <NumberButton button={button} />)}
            </div>
            <div className="action-buttons">
            {ActionButtonsArray.map(button => <ActionButton button={button} />)}
            </div>
        </div>
    )
}

export default ButtonBody;