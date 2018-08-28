import React from 'react';
import './Button.css';

function NumberButton() {
  return (
    <div className='number-buttons'>
      <Button text='clear' type='number' />
      <div className='num'>
        <Button text='7' type='number' />
        <Button text='8' type='number' />
        <Button text='9' type='number' />
      </div>
      <div className='num'>
        <Button text='4' type='number' />
        <Button text='5' type='number' />
        <Button text='6' type='number' />
      </div>
      <div className='num'>
        <Button text='1' type='number' />
        <Button text='2' type='number' />
        <Button text='3' type='number' />
      </div>
      <Button text='0' type='number' />
    </div>  
  );
} 



function Button(props) {
  return (
    <div className='number-button'>
      <button className={`number-button ${props.type}`}> {props.text} </button> 
    </div>
  );
};

export default NumberButton;