import React from 'react';
import './Display.css';
import NumbersButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const Numbers = () => {
  return (
    <div className='numbers-section'>
      <ActionButton buttonStyle='full-length numbers' text='clear' />
      <NumbersButton buttonStyle='third-length numbers' text='7' />
      <NumbersButton buttonStyle='third-length numbers' text='8' />
      <NumbersButton buttonStyle='third-length numbers' text='9' />
      <NumbersButton buttonStyle='third-length numbers' text='4' />
      <NumbersButton buttonStyle='third-length numbers' text='5' />
      <NumbersButton buttonStyle='third-length numbers' text='6' />
      <NumbersButton buttonStyle='third-length numbers' text='1' />
      <NumbersButton buttonStyle='third-length numbers' text='2' />
      <NumbersButton buttonStyle='third-length numbers' text='3' />
      <ActionButton buttonStyle='full-length numbers' text='0' />
    </div>
  );
}

export default Numbers;
