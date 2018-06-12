import React from 'react';
import './Button.css';

const Funcs = () => {
    return (
      <div className='action'>
        <Act className='act' text='&divide;' />
        <Act className='act' text='&times;' />
        <Act className='act' text='&minus;' />
        <Act className='act' text='&#43;' />
        <ActE className='act' text='&#61;' />
      </div>
    );
  };

export default Funcs;