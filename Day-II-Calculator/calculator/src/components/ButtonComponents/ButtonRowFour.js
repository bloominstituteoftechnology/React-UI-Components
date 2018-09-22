import React from 'react';
import './Button.css';
import ActionButton from './ActionButton.js'

const ButtonRowFour = () => {
    return(<div className="btn-row-main">
        <ActionButton name="divide"/>
        <ActionButton name="divide"/>
        <ActionButton name="divide"/>
        <ActionButton name="divide"/>
    </div>
    );
};

export default ButtonRowFour;