import React from 'react';
import './Button.css';

const NumberButton = (props) =>{
   //prop.displayNumber===1
    return(
        <div className={props.buttonStyle}>
            {props.displaySymbol}
        </div>
   )
}

export default NumberButton;

