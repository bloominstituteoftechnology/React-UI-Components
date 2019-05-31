import React from 'react';
import './Button.css';

function ActionButton(props) {
  return (
    <div className='actionButtons'>
      <div className={props.zero}>{props.text}</div>;
      <div className={props.clear}>{props.text}</div>;
    </div>
  );
};

export default ActionButton;