import React from 'react';
import './Display.css';
import Numbers from './Numbers';
import CalculationWindow from './CalculationWindow';
import MathButtons from './MathButtons';

const click = (element) => {
  console.log(element.target.innerHTML);
}

const CalculatorDisplay = (props) => {
  return (
    <section className='calculator-display'>
      <CalculationWindow />
      <section className='buttons-area'>
        <Numbers onClick={click} />
        <MathButtons onClick={click} />
      </section>
    </section>
  );
}

export default CalculatorDisplay;
