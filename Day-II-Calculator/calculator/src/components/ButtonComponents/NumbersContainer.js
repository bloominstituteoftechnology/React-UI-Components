import React, { Fragment } from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

function NumbersContainer() {
    return (
        <div className="numbers">
          <ActionButton text='clear' />
          <NumberButton buttonStyle='number' text='1' />
          <NumberButton buttonStyle='number' text='2' />
          <NumberButton buttonStyle='number' text='3' />
          <NumberButton buttonStyle='number' text='4' />
          <NumberButton buttonStyle='number' text='5' />
          <NumberButton buttonStyle='number' text='6' />
          <NumberButton buttonStyle='number' text='7' />
          <NumberButton buttonStyle='number' text='8' />
          <NumberButton buttonStyle='number' text='9' />
          <ActionButton text='0' />
        </div>
    );
}

export default NumbersContainer;