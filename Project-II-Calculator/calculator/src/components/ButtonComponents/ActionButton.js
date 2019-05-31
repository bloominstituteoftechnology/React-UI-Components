import React from 'react';
import './Button.css';

function ActionButton(props) {
  return (
    <div className='actionButtons'>
      <button className={props.zero}>{props.text}</button>;
      <button className={props.clear}>{props.text}</button>;
    </div>
  );
};

export default ActionButton;