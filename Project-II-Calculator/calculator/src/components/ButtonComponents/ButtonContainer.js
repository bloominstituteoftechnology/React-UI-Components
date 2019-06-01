import React from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

let nums = [7, 8, 9, 4, 5, 6, 1, 2, 3];

function ButtonContainer(props) {
  return (
    <div className='buttonContainer'>
      <ActionButton buttonStyle='clear' text='CLEAR' />
      {
        nums.map((num => {
          return <NumberButton buttonStyle='number' text={num} />
        }))
      }
    </div>
  );
};

export default ButtonContainer;