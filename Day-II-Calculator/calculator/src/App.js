import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div className='calc-container'>
        <CalculatorDisplay />
        {/* TODO: add 6 rows including number container  */}
        <div className='number-action-container'>
          {/* row #1  clear/divide */}
          <div className='row'>
              <ActionButton buttonStyle='button clear-btn' text='clear' />
              <NumberButton buttonStyle='button maroon' text='&divide;' />
          </div>

          {/* row #2 7/8/9/x */}
          <div className='row'>
            <NumberButton buttonStyle='button' text='7' />
            <NumberButton buttonStyle='button' text='8' />
            <NumberButton buttonStyle='button' text='9' />
            <ActionButton buttonStyle='button maroon' text='&times;' />
            {/* <ActionButton buttonStyle='button maroon' text='x' /> */}
          </div>

          {/* row #3 4/5/6/- */}
          <div className='row'>
          <NumberButton buttonStyle='button' text='4' />
            <NumberButton buttonStyle='button' text='5' />
            <NumberButton buttonStyle='button' text='6' />
            <ActionButton buttonStyle='button maroon' text='&minus;' />
          </div>

          {/* row #4 1/2/3/+ */}
          <div className='row'>
          <NumberButton buttonStyle='button' text='1' />
            <NumberButton buttonStyle='button' text='2' />
            <NumberButton buttonStyle='button' text='3' />
            <ActionButton buttonStyle='button maroon' text='+' />
          </div>

          {/* row #5 0/= */}
          <div className='row'>
          <NumberButton buttonStyle='button clear-btn' text='0' />
            <ActionButton buttonStyle='button maroon' text='=' />
          </div>

        </div>
    </div>
  );
};

export default App;
