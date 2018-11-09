import React from 'react';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const numbers = [1,2,3,4,5,6,7,8,9];

function LeftButtonsContainer(props) {
  return (
    <div className="calc-left-buttons-container">
        <ActionButton label='Clear' large />
        {numbers.map(number => <NumberButton key={number} onClick={props.onClick} number={number} />)}
        <NumberButton number={0} large />
    </div>
  );
}

export default LeftButtonsContainer;