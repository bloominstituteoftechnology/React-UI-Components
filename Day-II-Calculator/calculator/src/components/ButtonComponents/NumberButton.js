import React from 'react';
import './Button.css';



const NumberButton = props => {
    return <button className = 'number-button'> {props.name} </button>;
};



export default NumberButton;