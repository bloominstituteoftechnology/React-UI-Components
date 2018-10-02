import React from 'react';
import './Button.css'
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const buttons = [
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
]

const Keys = (props) => {
  const handleInput = (e) => {
    props.handleInput(e.target.value);
  };

  return (<div className='keys'>
    <ActionButton buttonStyle='long' label='clear' onClick={props.handleClear}/>
    {buttons.map(button => {
      return(
        <NumberButton button={button} onClick={handleInput}/>
        )
      })
    }
          {/* <NumberButton buttonStyle='operation-button' label='&divide;' value='/' onClick={handleInput}/>
          <NumberButton buttonStyle='number-button' label='7' value='7' onClick={handleInput}/>
          <NumberButton buttonStyle='number-button' label='8' value='8' onClick={handleInput}/>
          <NumberButton buttonStyle='number-button' label='9' value='9' onClick={handleInput}/>
          <NumberButton buttonStyle='operation-button' label='&times;' value='*' onClick={handleInput}/>
          <NumberButton buttonStyle='number-button' label='4' value='4' onClick={handleInput}/>
          <NumberButton buttonStyle='number-button' label='5' value='5' onClick={handleInput}/>
          <NumberButton buttonStyle='number-button' label='6' value='6' onClick={handleInput}/>
          <NumberButton buttonStyle='operation-button' label='&minus;' value='-' onClick={handleInput}/>
          <NumberButton buttonStyle='number-button' label='1' value='1' onClick={handleInput}/>
          <NumberButton buttonStyle='number-button' label='2' value='2' onClick={handleInput}/>
          <NumberButton buttonStyle='number-button' label='3' value='3' onClick={handleInput}/>
          <NumberButton buttonStyle='operation-button' label='+' value='+' onClick={handleInput}/>
          <NumberButton buttonStyle='number-button long' label='0' value='0' onClick={handleInput}/> */
    }
    <ActionButton buttonStyle='operation-button' label='=' onClick={props.handleCalculate}/>
  </div>)
}

export default Keys;
