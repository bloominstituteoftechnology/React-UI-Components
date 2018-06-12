import React from 'react';
import './Button.css';

const NumberButton = props => {
return (
    <div className= {props.name}>
    {props.number}
    </div>
    );
};

NumberButton.defaultProps ={
    number:'you forgot to put a value in, you idiot',
    name: 'default'
};

export default NumberButton;