import React from 'react';
import './Display.css';
import NumbersButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const Numbers = (props) => {
  return (
    <div className='numbers-section'>
      <ActionButton buttonStyle='full-length numbers' text='clear' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers' text='7' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers' text='8' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers' text='9' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers' text='4' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers' text='5' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers' text='6' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers' text='1' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers' text='2' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers' text='3' onClick={props.onClick} />
      <ActionButton buttonStyle='full-length numbers' text='0' onClick={props.onClick} />
    </div>
  );
}

export default Numbers;
