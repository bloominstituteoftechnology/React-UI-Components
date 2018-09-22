import React from 'react';
import './Button.css';

const NumberButton = (props) => {

    let button = '';

    switch(props.text){
        case 'divide':
            button = <button className={props.buttonStyle}>&divide;</button>;
            break;
        default:
            button = <button className={props.buttonStyle}>{props.text}</button>;
    }
    return (
        // <button className={props.buttonStyle}>{props.text}</button>
        button
    )
}

export default NumberButton;
