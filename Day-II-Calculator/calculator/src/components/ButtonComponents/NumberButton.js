import React from 'react';
import './Button.css';

const NumberButton = (props) =>{
    if(props.number==='0'){
        return(
            <div class='number button number-0'>{props.number}</div>
        );
    };
    return(
        <div class='number button'>{props.number}</div>
    );
};

export default NumberButton;