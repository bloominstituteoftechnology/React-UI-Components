import React from 'react';
import './Button.css';

const Buttons = () => {
    return (
      <div>
        <div className='numBlock'>
          <Clear />
        </div>
        <div className='inline'>
          <Num className='box' text='9' />
          <Num className='box' text='8' />
          <Num className='box' text='7' />
          <Num className='box' text='6' />
          <Num className='box' text='5' />
          <Num className='box' text='4' />
          <Num className='box' text='3' />
          <Num className='box' text='2' />
          <Num className='box' text='1' />
        </div>
        <div className='numBlock'>
          <Num text='0' />
        </div>
      </div>
    );
  };

export default Buttons;