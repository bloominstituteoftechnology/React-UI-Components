import React from 'react';
import './Button.css';

// let buttonNumber = () => {
//     for
// }

let NumberButton = (props) => {
    return (
        <div className={props.buttonStyle}>
            {props.text}
        </div>   
    )
    
}

export default NumberButton;