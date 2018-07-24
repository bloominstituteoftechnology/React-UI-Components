import React from 'react';
import './Button.css';

const ActionComponent = () => {
  return(
      <div className="opeartion-buttons">
        <OperationButton operation="+" />
        <OperationButton operation="-" />
        <OperationButton operation="×" />
        <OperationButton operation="÷" />
        <OperationButton operation="=" />
      </div>
  );
}

const OperationButton = props => {
  return (
    <button className="opeartion-button"> {props.operation} </button>
  );
}

export default ActionComponent;