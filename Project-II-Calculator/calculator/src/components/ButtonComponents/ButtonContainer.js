import React from 'react';
import NumberButton from './NumberButton';

function ButtonContainer(props) {
  return (
    <div className='buttonContainer'>
      {props.button}
    </div>
  );
};

export default ButtonContainer;