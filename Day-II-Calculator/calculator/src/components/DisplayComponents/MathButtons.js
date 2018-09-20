import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';

const MathButtons = () => {
  return (
      <section className='math-buttons'>
        <ActionButton buttonStyle='math-signs' text='&#247;' />
        <ActionButton buttonStyle='math-signs' text='&#215;' />
        <ActionButton buttonStyle='math-signs' text='&#8722;' />
        <ActionButton buttonStyle='math-signs' text='&#43;' />
        <ActionButton buttonStyle='math-signs' text='&#61;' />
      </section>
  );
}

export default MathButtons;
