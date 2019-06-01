import React from 'react';
import './Button.css';
import OperatorButton from './OperatorButton';


let ops = ['÷','x','-','+','='];
function ButtonContainer() {
  return (
    <div className='operatorContainer'>
      {
        ops.map((op => {
          let style = ''
          if (op == '÷') {style = 'divide'}
          else if (op == 'x') {style = 'multiply'}
          else if (op == '-') {style = 'subtract'}
          else if (op == '+') {style = 'add'}
          else if (op == '=') {style = 'equals'}
          return <OperatorButton buttonStyle={`operator ${style}`} text={op} />
        }))
      }
    </div>
  );
};
export default ButtonContainer;