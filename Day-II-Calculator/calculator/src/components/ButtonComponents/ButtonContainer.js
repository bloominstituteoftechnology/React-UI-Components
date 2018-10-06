import React from 'react';
import './Button.css';
import OperatorButton from './ActionButton'
import NumberButton from './NumberButton'
const buttonArray =[
  {text: 7,
    type: 'numberButton'},
  {text: 8,
    type: 'numberButton'},
  {text: 9,
    type: 'numberButton'},
  {text: 'X',
    type: 'operatorButton'},
  {text: 4,
    type: 'numberButton'},
  {text: 5,
    type: 'numberButton'},
  {text: 6,
    type: 'numberButton'},
  {text: '-',
    type: 'operatorButton'},
  {text: 1,
    type: 'numberButton'},
  {text: 2,
    type: 'numberButton'},
  {text: 3,
    type: 'numberButton'},
  {text: '+',
    type: 'operatorButton'}
]
const ButtonContainer = props => {
  return (
      <div className='buttonContainer'>
        <div className='rowOne'>
          <NumberButton text='clear' type='bigButton'/>
          <NumberButton text='÷' type='operatorButton'/>
        </div>

        <div className='rowTwo'>
        {buttonArray.map(button => {
          return <NumberButton text={`${button.text}`} type={button.type} />;
        })}
        </div>

        <div className='rowOne'>
          <NumberButton text='0' type='bigButton'/>
          <NumberButton text='=' type='operatorButton'/>

        </div>
      </div>
      );
};
export default ButtonContainer;
