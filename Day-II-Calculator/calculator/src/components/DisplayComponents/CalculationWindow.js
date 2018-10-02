import React from 'react';
import './Display.css';

const CalculationWindow = (props) =>  {
  return (
    <section className='calculation-window'>
        {props.text}
    </section>
  );
}

export default CalculationWindow;
