import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import Keypad from './Keypad';

const ButtonBox = () => {
    return (
        <div className="button-box">
        <Keypad/>
        <ActionButton/>
        </div>
    )
};

export default ButtonBox;