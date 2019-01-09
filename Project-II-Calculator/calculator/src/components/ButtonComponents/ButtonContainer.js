import React from 'react';
import '.Button.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperationButton from './components/ButtonComponents/OperationButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const ButtonContainer = () => {
    return (
        <div>
            <ActionButton buttonStyle = 'white-btn action-btn' value = 'clear' />
            <OperationButton buttonStyle = 'red-btn operator-btn' value = '&divide;' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '7' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '8' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '9' />
            <OperationButton buttonStyle = 'red-btn operator-btn' value = '&times;' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '4' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '5' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '6' />
            <OperationButton buttonStyle = 'red-btn operator-btn' value = '-' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '1' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '2' />
            <NumberButton buttonStyle = 'white-btn number-btn' value = '3' />
            <OperationButton buttonStyle = 'red-btn operator-btn' value = '+' />
            <ActionButton buttonStyle = 'white-btn action-btn' value = '0' />
            <OperationButton buttonStyle = 'red-btn operator-btn' value = '=' />
        </div>
    );
}

export default ButtonContainer;