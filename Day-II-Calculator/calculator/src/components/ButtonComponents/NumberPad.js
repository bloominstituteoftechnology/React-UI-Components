import React from 'react';
import Button from './Button.css';
import ClearButton from './ClearButton';
import NumberButton from './NumberButton';
import ZeroButton from './ZeroButton';

const NumberPad = (props) => {
    return(
        <div className={props.displayStyle}>
            <ClearButton />
            <NumberButton text={props.text} displayStyle="numberButtons"/>
            <ZeroButton text={props.text} displayStyle="bigButton zero" />
        </div>
    );
};

export default NumberPad;