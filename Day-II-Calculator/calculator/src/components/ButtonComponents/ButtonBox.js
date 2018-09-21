import React from 'react';
import './Button.css';
import Keypad from './Keypad';
import FunctionButton from './FunctionButton';

const ButtonBox = () => {
    return (
        <div className="button-box">
        <Keypad/>
            <div className="function-box">
            <FunctionButton buttonStyle="function" text="÷" />
            <FunctionButton buttonStyle="function" text="×" />
            <FunctionButton buttonStyle="function" text="−" />
            <FunctionButton buttonStyle="function" text="+" />
            <FunctionButton buttonStyle="function" text="=" />
            </div>
        </div>
    )
};

export default ButtonBox;





