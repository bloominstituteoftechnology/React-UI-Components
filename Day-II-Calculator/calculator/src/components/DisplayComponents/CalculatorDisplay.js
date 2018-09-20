import React from 'react';
import './Display.css';
import Numbers from './Numbers';
import CalculationWindow from './CalculationWindow';
import MathButtons from './MathButtons';

const CalculatorDisplay = () => {
  return (
    <section className='calculator-display'>
      <CalculationWindow />
      <section className='buttons-area'>
        <Numbers />
        <MathButtons />
      </section>
    </section>
  );
}

export default CalculatorDisplay;
