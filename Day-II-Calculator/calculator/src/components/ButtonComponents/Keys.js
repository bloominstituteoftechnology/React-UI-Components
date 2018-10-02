import React from 'react';
import './Button.css'
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const Keys = (props) => {
  const handleInput = (e) => {
    props.handleInput(e.target.value);
  };

  return (
    <div className='keys'>
          <ActionButton buttonStyle='long' label='clear' onClick={props.handleClear}/>
          <NumberButton buttonStyle='operation-button' label='&divide;' value='/' onClick={handleInput}/>
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
          <NumberButton buttonStyle='number-button long' label='0' value='0' onClick={handleInput}/>
          <ActionButton buttonStyle='operation-button' label='=' onClick={props.handleCalculate}/>
    </div>
  )
}

export default Keys;
