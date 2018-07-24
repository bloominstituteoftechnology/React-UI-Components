import React from 'react';
import './Button.css';


const NumberButton = props => {
    return (
        <button className={`btn ${props.btncolor} ${props.btnsize}`}>
        {props.text}
        </button>
    );  

}

export default NumberButton;
