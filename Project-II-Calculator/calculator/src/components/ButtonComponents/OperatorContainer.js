import React from 'react';
import './Button.css';
import OperatorButton from './OperatorButton';


let ops = ['÷','x','-','+','='];
function ButtonContainer() {
  return (
    <div className='operatorContainer'>
      {
        ops.map((op => {
          return <OperatorButton buttonStyle={`operator ${op}`} text={op} />
        }))
      }
    </div>
  );
};

export default ButtonContainer;