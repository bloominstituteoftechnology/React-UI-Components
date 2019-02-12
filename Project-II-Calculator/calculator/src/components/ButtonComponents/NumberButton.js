import React from 'react';
import './Button.css';


const NumberButton = props => {
    return(
        <div>
            {props.numbers}
        </div>
    );
}

export default NumberButton;