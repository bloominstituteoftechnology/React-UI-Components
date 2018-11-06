import React, { Fragment } from 'react';
import ActionButton from './ActionButton';
import Digits from './Digits';

function NumbersContainer() {
    return (
        <div className="numbers">
          <ActionButton text='clear' />
          <Digits />
          <ActionButton text='0' />
        </div>
    );
}

export default NumbersContainer;