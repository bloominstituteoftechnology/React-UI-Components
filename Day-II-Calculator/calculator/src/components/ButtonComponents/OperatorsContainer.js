import React, { Fragment } from 'react';
import NumberButton from './NumberButton';

function OperatorsContainer () {
    return (
        <div className='operators'>
            <NumberButton buttonStyle='arithmetic' text='&divide;' />
            <NumberButton buttonStyle='arithmetic' text='&times;' />
            <NumberButton buttonStyle='arithmetic' text='&minus;' />
            <NumberButton buttonStyle='arithmetic' text='&#x2b;' />
            <NumberButton buttonStyle='arithmetic' text='&#x3d;' />
        </div>
    );
}

export default OperatorsContainer;