import React from 'react';
import './Button.css';

function ActionButton(){
    return(
      <div className='action-container'>
        <button className='divide'>÷</button>
        <button className='mult'>×</button>
        <button className='sub'>−</button>
        <button className='add'>+</button>
        <button className='equal'>=</button>
      </div>
    )
  }
  
  export default ActionButton;