import React from 'react';

import './Button.css';

import OperatorButton from "./OperatorButton";

const OperatorsColumn = props => {
  const operators = ["÷", "×", "−", "+", "="];

  return (
    <div className="operators-column">
      {operators.map(operator => <OperatorButton key={operator} buttonName={operator} handleClick={props.handleClick} />)}
    </div>
  );
};

export default OperatorsColumn;