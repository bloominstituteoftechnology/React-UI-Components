import React from 'react';
import './Button.css';


const NumberButton = (props) => {
    return(
        <button className="buttonstyle">{props.text}</button>
    );
};

export default NumberButton;