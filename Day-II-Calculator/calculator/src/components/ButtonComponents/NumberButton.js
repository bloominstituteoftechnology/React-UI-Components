import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button className={ `button__number ${ props.style }` }>
            {props.number}
        </button>
    );
};

NumberButton.defaultProps = {number: '$'}

export default NumberButton;