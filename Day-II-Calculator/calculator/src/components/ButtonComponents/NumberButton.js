import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <button onClick={ props.onClick } className={ `button__number ${ props.style }` }>
            {props.number}
        </button>
    );
};

NumberButton.defaultProps = {number: '$'}

export default NumberButton;