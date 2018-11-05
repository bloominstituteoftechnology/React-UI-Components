import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const NumberPadContainer = props => {
    return (
        <div className={`numberPadCont ${props.className}`}>
        {props.children}
        </div>
    );
};

export default NumberPadContainer