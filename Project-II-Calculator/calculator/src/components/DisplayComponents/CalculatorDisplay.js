import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = () => {
    return (
      <React.Fragment>
        <ActionButton className="bigButton" action="clear" />
        <ActionButton action="÷" />
        <NumberButton number="7" />
        <NumberButton number="8"/>
        <NumberButton number="9"/>
        <ActionButton action="x" />
        <NumberButton number="4"/>
        <NumberButton number="5"/>
        <NumberButton number="6"/>
        <ActionButton action="-" />
        <NumberButton number="1"/>
        <NumberButton number="2"/>
        <NumberButton number="3"/>
        <ActionButton action="+" />
        <NumberButton className="bigButton" number="0"/>
        <ActionButton action="=" />
      </React.Fragment>
    );
  };

  export default CalculatorDisplay;