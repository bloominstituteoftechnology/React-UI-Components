import React from 'react';
import './Button.css'
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const numberButtons = [
  {
    label: '÷',
    buttonStyle: 'operation-button',
    value: '/',

  }, {
    label: '7',
    buttonStyle: 'number-button',
    value: '7',

  }, {
    label: '8',
    buttonStyle: 'number-button',
    value: '8',

  }, {
    label: '9',
    buttonStyle: 'number-button',
    value: '9',

  }, {
    label: 'x',
    buttonStyle: 'operation-button',
    value: '*',

  }, {
    label: '4',
    buttonStyle: 'number-button',
    value: '4',

  }, {
    label: '5',
    buttonStyle: 'number-button',
    value: '5',

  }, {
    label: '6',
    buttonStyle: 'number-button',
    value: '6',

  }, {
    label: '-',
    buttonStyle: 'operation-button',
    value: '-',

  }, {
    label: '1',
    buttonStyle: 'number-button',
    value: '1',

  }, {
    label: '2',
    buttonStyle: 'number-button',
    value: '2',


  }, {
    label: '3',
    buttonStyle: 'number-button',
    value: '3',


  }, {
    label: '+',
    buttonStyle: 'operation-button',
    value: '+',


  }, {
    label: '0',
    buttonStyle: 'number-button long',
    value: '0',


  }
];

const Keys = (props) => {
  const handleInput = (e) => {
    props.handleInput(e.target.value);
  };

  return (<div className='keys'>
    <ActionButton buttonStyle='long' label='clear' onClick={props.handleClear}/>
    {numberButtons.map(button => {
      return(
        <NumberButton button={button} onClick={handleInput}/>
        )
      })}
    <ActionButton buttonStyle='operation-button' label='=' onClick={props.handleCalculate}/>
  </div>)
}

export default Keys;
