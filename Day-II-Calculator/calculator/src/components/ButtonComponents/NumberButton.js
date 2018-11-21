import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return  <div className = {props.buttonStyle} data-txt = {props.type} onClick = {() => props.click(props.type)} >{props.text}</div>
}   

export default NumberButton; 
