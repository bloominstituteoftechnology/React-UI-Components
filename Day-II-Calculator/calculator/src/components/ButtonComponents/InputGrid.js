import React from 'react';
import './Button.css';
import ActionButton from './ActionButton.js';

const InputGrid = props => {
  return (
    <div className="input-wrapper">
      <ActionButton name="clear" styles="button long" />
      <ActionButton name="7" styles="button short" />
      <ActionButton name="8" styles="button short" />
      <ActionButton name="9" styles="button short" />
      <ActionButton name="4" styles="button short" />
      <ActionButton name="5" styles="button short" />
      <ActionButton name="6" styles="button short" />
      <ActionButton name="1" styles="button short" />
      <ActionButton name="2" styles="button short" />
      <ActionButton name="3" styles="button short" />
      <ActionButton name="0" styles="button long" />
    </div>
  )
}

export default InputGrid;
