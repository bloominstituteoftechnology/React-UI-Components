import React from 'react';
import './Button.css';





//class NumberButton extends React.Component{ 



   const NumberButton = (props) =>{
    return(
        <div>
        <button className={props.buttonStyle} onClick={props.click} data-value={props.text}>{props.text}</button>
        </div>
    );
}


export default NumberButton;