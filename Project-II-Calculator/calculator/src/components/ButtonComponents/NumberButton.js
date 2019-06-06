import React from 'react';
import './Button.css';



const NumberButton = props =>{
    console.log(props)
    return(
    <button className={props.buttonStyle}>{props.numberTest}</button>
    )
}
export default NumberButton;