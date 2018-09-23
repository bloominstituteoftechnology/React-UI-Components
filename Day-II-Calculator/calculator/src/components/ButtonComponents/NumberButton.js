import React from 'react';
import './Button.css';



//Number may look like props.displayNumber === 1
export const NumberButton = (props) => {

    return <button className= {props.buttonStyle}
    //When clicked use the props value not the text
    onClick = {() => props.handleClick(props.value)}
    >{props.text}</button>


 
    
}
