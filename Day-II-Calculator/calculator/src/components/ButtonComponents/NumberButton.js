import React from 'react';
import './Button.css';



//Number may look like props.displayNumber === 1
export const NumberButton = (props) => {

    return <button className= {props.buttonStyle}
    onClick = {() => props.handleClick(props.text)}
    >{props.text}</button>


 
    
}
