import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';




const ButtonContainer = () => {
    return (
        <div>
            <div>
                <ActionButton buttonStyle="action" text="clear" />
                <NumberButton buttonStyle="operator" text="/" />
            </div>
            <div>
                <NumberButton buttonStyle="number" text="7" />
                <NumberButton buttonStyle="number" text="8" />
                <NumberButton buttonStyle="number" text="9" />
                <NumberButton buttonStyle="operator" text="X" />
            </div>
            <div>
                <NumberButton buttonStyle="number" text="4" />
                <NumberButton buttonStyle="number" text="5" />
                <NumberButton buttonStyle="number" text="6" />
                <NumberButton buttonStyle="operator" text="-" />
            </div>
            <div>
                <NumberButton buttonStyle="number" text="1" />
                <NumberButton buttonStyle="number" text="2" />
                <NumberButton buttonStyle="number" text="3" />
                <NumberButton buttonStyle="operator" text="+" />
            </div>
            <div>
                <ActionButton buttonStyle="action" text="0" />
                <NumberButton buttonStyle="operator" text="=" />
            </div>
        </div>
    )
}


export default ButtonContainer;