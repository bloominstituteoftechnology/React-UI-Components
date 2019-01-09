import React from 'react';
import './Button.css';


const NumberButton = (props) => {
    return(
       
        <button className="button-style" className={props.buttonStyle}>{props.text}</button>
    
    )
 }

export default NumberButton;