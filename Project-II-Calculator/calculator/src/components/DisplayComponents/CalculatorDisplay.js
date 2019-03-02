import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const Calculator = () => {
    return (
      <div id="container">
        <div className="display row">
          <h2 className="none">0</h2>
        </div>

        <div className="top row">
          <ActionButton className="med" text="clear" />
          <NumberButton className="operator" text="&#247;" />
        </div>

        <div className="topNums row">
          <NumberButton className="sm" text="7" />
          <NumberButton className="sm" text="8" />
          <NumberButton className="sm" text="9" />
          <NumberButton className="operator" text="&#215;" />
        </div>

        <div className="middleNums row">
          <NumberButton className="sm" text="4" />
          <NumberButton className="sm" text="5" />
          <NumberButton className="sm" text="6" />
          <NumberButton className="operator" text="&#8722;" />
        </div>

        <div className="bottomNums row">
          <NumberButton className="sm" text="1" />
          <NumberButton className="sm" text="2" />
          <NumberButton className="sm" text="3" />
          <NumberButton className="operator" text="&#43;" />
        </div>

        <div className="bottom row">
          <ActionButton className='med' text='0' />
          <NumberButton className='operator' text='&#61;' />
        </div>
      </div>
    );
}

export default Calculator;