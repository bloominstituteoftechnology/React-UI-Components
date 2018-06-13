import React, { Component } from 'react';
import './Button.css';

const NumberButton = (props) => {
    console.log('NumberButton props: ', props)
  
    return (
        <button className={props.customStyle}>{props.text}</button>
    )
}

export default NumberButton;