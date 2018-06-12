import React from 'react';
import './Button.css';


const NumberButton = (props) => {
    const clickHandler = () => {
        return props.text;
    };
    return (<button
    onClick={() => clickHandler()}
    className={`number-button ${props.customStyle}`}>
    {props.text}
    </button>)
};

NumberButton.defaultProps = {
    text: '0',
};

export default NumberButton;