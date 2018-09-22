import React from 'react';
import './Button.css';

const NumberButton = (props) =>  {
    console.log(props.className)
    return(
        <div className={props.buttonStyle}>
            {props.text}
        </div>
    )
}

export default NumberButton;
