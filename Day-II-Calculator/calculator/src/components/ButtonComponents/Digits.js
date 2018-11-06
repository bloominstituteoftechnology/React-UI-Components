import React, { Fragment } from 'react';
import NumberButton from './NumberButton';

function Digits() {
    return(
        <Fragment>
            <NumberButton buttonStyle='number' text='1' />
            <NumberButton buttonStyle='number' text='2' />
            <NumberButton buttonStyle='number' text='3' />
            <NumberButton buttonStyle='number' text='4' />
            <NumberButton buttonStyle='number' text='5' />
            <NumberButton buttonStyle='number' text='6' />
            <NumberButton buttonStyle='number' text='7' />
            <NumberButton buttonStyle='number' text='8' />
            <NumberButton buttonStyle='number' text='9' />
        </Fragment>
    );
}

export default Digits;