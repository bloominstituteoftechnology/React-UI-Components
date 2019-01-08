import React from 'react';
import './Button.css';
import OperatorButton from './OperatorButton';

const OperatorContainer = props => {
  return (
    <div className="operator-container">
      {props.operators.map((operator, index) => {
        return (
          <OperatorButton
            clicked={props.clicked}
            text={operator}
            name={operator}
            key={'number' + index}
          />
        );
      })}
    </div>
  );
};

export default OperatorContainer;
