import React from 'react';
import './CalculatorContainer.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'


const CalculatorContainer = (props) => {
  return (
    <div className={props.style}>
    <CalculatorDisplay  text={0} />
      <div className="row-1">
      <ActionButton buttonStyle="button action" text ='clear'/>
      <NumberButton buttonStyle="button red" text='/'/>
      </div>
      <div className="row-2">
      <NumberButton buttonStyle="button white" text={7}/>
      <NumberButton buttonStyle="button white" text={8}/>
      <NumberButton buttonStyle="button white" text={9}/>
      <NumberButton buttonStyle="button red" text='x'/>
      </div>
      <div className="row-3">
      <NumberButton buttonStyle="button white" text={4}/>
      <NumberButton buttonStyle="button white" text={5}/>
      <NumberButton buttonStyle="button white" text={6}/>
      <NumberButton buttonStyle="button red" text='-'/>
      </div>
      <div className="row-4">
      <NumberButton buttonStyle="button white" text={1}/>
      <NumberButton buttonStyle="button white" text={2}/>
      <NumberButton buttonStyle="button white" text={3}/>
      <NumberButton buttonStyle="button red" text='+'/>
      </div>
      <div className="row-5">
      <ActionButton buttonStyle="button action" text={0}/>
      <NumberButton buttonStyle="button red" text='='/>
      </div>
    </div>
  )
}

export default CalculatorContainer
