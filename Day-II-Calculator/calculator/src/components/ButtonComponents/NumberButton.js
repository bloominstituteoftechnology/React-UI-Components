import React from 'react';
import './Button.css';





const NumberButton = props => {
    return <button className="number-button"> {props.name} </button>;

};

NumberButton.defaultProps = {
    name:"add name prop"
};

export default NumberButton;

