import React from 'react';
import './Button.css';

//Number may look like props.displayNumber === 1
const NumberButton = (props) => {

    return (
    
         <button className= {props.buttonStyle}>{props.text}</button>


 
    )
}

export default NumberButton