import React from 'react';
import './Button.css';
import SmallButton from './SmallButton.js';
import WideButton from './WideButton.js';

const ButtonContainer = () => {
    return (
        <div className = "button-container">
        <WideButton text = "clear" />
        <SmallButton text = "&#247;" />
        <SmallButton text = "7" />
        <SmallButton text = "8" />
        <SmallButton text = "9" />
        <SmallButton text = "x" />
        <SmallButton text = "4" />
        <SmallButton text = "5" />
        <SmallButton text = "6" />
        <SmallButton text = "&#8722;" />
        <SmallButton text = "1" />
        <SmallButton text = "2" />
        <SmallButton text = "3" />
        <SmallButton text = "+" />
        <WideButton text = "0" />
        <SmallButton text = "=" />
        </div>
    );
};

export default ButtonContainer;