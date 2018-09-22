import React from 'react';
import './Button.css';

const NumberButton = (props) =>{
    return(
        <button className = {props.buttonStyle}>
            {props.text}
        </button>    
    );
};

const Numbers = () => {
    return(
        <NumberButton buttonStyle = {'number'} text ={'7'} />
        <NumberButton buttonStyle = {'number'} text ={'8'} />
        <NumberButton buttonStyle = {'number'} text ={'9'} />
        <NumberButton buttonStyle = {'number'} text ={'4'} />
        <NumberButton buttonStyle = {'number'} text ={'5'} />
        <NumberButton buttonStyle = {'number'} text ={'6'} />
        <NumberButton buttonStyle = {'number'} text ={'1'} />
        <NumberButton buttonStyle = {'number'} text ={'2'} />
        <NumberButton buttonStyle = {'number'} text ={'3'} />
    );
};
    
export default NumberButton;