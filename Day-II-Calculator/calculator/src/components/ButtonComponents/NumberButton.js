import React from 'react';
import './Button.css';

const NumberButtons = props => {
    return (
   
    <button className= {props.buttonProp}>{props.text}</button>
 
    );
};

export default NumberButtons;