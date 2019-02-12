import React from 'react';
import './Button.css';

const OneBtn = {
    buttonStyle: 'number-btn',
    text: '1',
};

const TwoBtn = {
    buttonStyle: 'number-btn',
    text: '2',
};

const ThreeBtn = {
    buttonStyle: 'number-btn',
    text: '3',
};

const FourBtn = {
    buttonStyle: 'number-btn',
    text: '4',
};

const FiveBtn = {
    buttonStyle: 'number-btn',
    text: '5',
};

const SixBtn = {
    buttonStyle: 'number-btn',
    text: '6',
};

const SevenBtn = {
    buttonStyle: 'number-btn',
    text: '7',
};

const EightBtn = {
    buttonStyle: 'number-btn',
    text: '8',
};

const NineBtn = {
    buttonStyle: 'number-btn',
    text: '9',
};







const NumberButton = props => {
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    );
};


export default NumberButton;