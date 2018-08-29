import React from 'react';
import './Button.css';


const NumberButton = (props) => (<div>
    <div id='number-buttons' className={props.buttonStyle}>{props.text}</div> </div>);



export default NumberButton;