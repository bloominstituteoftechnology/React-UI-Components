import React from 'react';
import './Button.css';

const NumberButton = (props) => {

    let button = '';

    switch(props.text){
        case 'divide':
            button = <button className={props.buttonStyle}>&divide;</button>;
            break;
        case 'subtract':
            button = <button className={props.buttonStyle}>&minus;</button>;
            break;
        default:
            button = <button className={props.buttonStyle}>{props.text}</button>;
    }
    return (
        button
    )
}

export default NumberButton;
