import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

function ActionButton(props) {
  return (
    <div className='actionButtons'>
      <button className={props.zero}>{props.text}</button>
      <NumberButton />
      <button className={props.clear}>{props.text}</button>
    </div>
  );
};

export default ActionButton;