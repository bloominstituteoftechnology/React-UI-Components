import React from 'react';
import './Button.css';

const NumberButton = props => {
return (
    <div className="elephant">
    {props.number}
    </div>
    );
};

NumberButton.defaultProps ={
    number:'you forgot to put a value in, you idiot'
};

export default NumberButton;