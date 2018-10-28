import React from 'react';
import NumberButtons from './NumberButton';
import ActionButtons from './ActionButton';
import './ControlContainer.css';

const ButtonContainer = props => {
  return (
      <div className='controlContainer'>
        <NumberButtons clearButton={props.clearButton} />
        <ActionButtons />
      </div>
  );
};

export default ButtonContainer;