import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';

const MathButtons = (props) => {
  return (
      <section className='math-buttons'>
        <ActionButton buttonStyle='math-signs' id='divide' text='&#247;' onClick={props.onClick} />
        <ActionButton buttonStyle='math-signs' id='multiply' text='&#215;' onClick={props.onClick} />
        <ActionButton buttonStyle='math-signs' id='minus' text='&#8722;' onClick={props.onClick} />
        <ActionButton buttonStyle='math-signs' id='plus' text='&#43;' onClick={props.onClick} />
        <ActionButton buttonStyle='math-signs' id='equals' text='&#61;' onClick={props.onClick} />
      </section>
  );
}

export default MathButtons;
