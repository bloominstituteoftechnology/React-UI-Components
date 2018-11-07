import React from 'react';
import './Button.css';

function ActionButton(){
  return(
    <div className='actionContainer'>
      <button className='divide'>÷</button>
      <button className='multiply'>×</button>
      <button className='subtract'>−</button>
      <button className='addition'>+</button>
      <button className='equal'>=</button>
    </div>
  )
}

export default ActionButton;
