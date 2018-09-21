import React from 'react';
import './Display.css';
import NumbersButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const Numbers = (props) => {
  return (
    <div className='numbers-section'>
      <ActionButton buttonStyle='full-length numbers clear' text='clear' onClick={props.onClick} />
    <NumbersButton buttonStyle='third-length numbers number' text='7' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers number' text='8' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers number' text='9' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers number' text='4' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers number' text='5' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers number' text='6' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers number' text='1' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers number' text='2' onClick={props.onClick} />
      <NumbersButton buttonStyle='third-length numbers number' text='3' onClick={props.onClick} />
      <ActionButton buttonStyle='full-length numbers number' text='0' onClick={props.onClick} />
    </div>
  );
}

export default Numbers;
