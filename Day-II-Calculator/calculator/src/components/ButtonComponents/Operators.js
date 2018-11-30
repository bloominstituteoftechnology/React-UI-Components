import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';


const Operators = props => {
  return (
    <div className="operators">
      <NumberButton text="&divide;" buttonStyle="operator" />
      <NumberButton text="x" buttonStyle="operator" />
      <NumberButton text="+" buttonStyle="operator" />
      <NumberButton text="-" buttonStyle="operator" />
      <NumberButton text="=" buttonStyle="operator" />
    </div>
  )
}

export default Operators;