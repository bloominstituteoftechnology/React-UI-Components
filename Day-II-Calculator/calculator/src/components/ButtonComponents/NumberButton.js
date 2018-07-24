import React from 'react';
import './Button.css';

const NewButton = props => {
    return (
        <button className={'buttonstyle ${props.extraStyles}'}>{props.text}</button>
    );
};




const NumberButton = props => {
    return (
        <div>
          
        </div>
    );
};

export default NumberButton;