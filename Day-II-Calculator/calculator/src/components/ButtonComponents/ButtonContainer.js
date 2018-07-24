import React from 'react';
import './Button.css';
import SmallButton from './SmallButton.js';
import WideButton from './WideButton.js';

const ButtonContainer = () => {
    return (
        <div className = "button-container">
        <WideButton text = "clear" />
        <SmallButton text = "&#247;" colorStyles = "button-colors" />
        <SmallButton text = "7" />
        <SmallButton text = "8" />
        <SmallButton text = "9" />
        <SmallButton text = "x" colorStyles = "button-colors"/>
        <SmallButton text = "4" />
        <SmallButton text = "5" />
        <SmallButton text = "6" />
        <SmallButton text = "&#8722;" colorStyles = "button-colors"/>
        <SmallButton text = "1" />
        <SmallButton text = "2" />
        <SmallButton text = "3" />
        <SmallButton text = "+" colorStyles = "button-colors"/>
        <WideButton text = "0" />
        <SmallButton text = "=" colorStyles = "button-colors"/>
        </div>
    );
};

export default ButtonContainer;