import React from 'react';
import './Button.css';

const NumberButton = props => { 

    return (

        <div className={`btn  ${props.styles}`}>{props.text}</div>



    ); 
};

export default NumberButton;