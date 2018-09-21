import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';

const MathButtons = (props) => {
  return (
      <section className='math-buttons'>
        <ActionButton buttonStyle='math-signs' text='&#247;' onClick={props.onClick} />
        <ActionButton buttonStyle='math-signs' text='&#215;' onClick={props.onClick} />
        <ActionButton buttonStyle='math-signs' text='&#8722;' onClick={props.onClick} />
        <ActionButton buttonStyle='math-signs' text='&#43;' onClick={props.onClick} />
        <ActionButton buttonStyle='math-signs' text='&#61;' onClick={props.onClick} />
      </section>
  );
}

export default MathButtons;
