import React from 'react';
// import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButtons from './components/ButtonComponents/NumberButton';
import ActionButtons from './components/ButtonComponents/ActionButton';
const App = () => {
  return (
    <div className='calculatorContainer'>
      <Display />
      <div className='column'>
        <div className='numberButtonsContainer'>
          <ActionButtons text={'clear'} buttonStyle={'action'} />
          <div className='numberContainer'>
            <NumberButtons text={'7'} buttonStyle={'number'} />
            <NumberButtons text={'8'} buttonStyle={'number'} />
            <NumberButtons text={'9'} buttonStyle={'number'} />
            <NumberButtons text={'4'} buttonStyle={'number'} />
            <NumberButtons text={'5'} buttonStyle={'number'} />
            <NumberButtons text={'6'} buttonStyle={'number'} />
            <NumberButtons text={'1'} buttonStyle={'number'} />
            <NumberButtons text={'2'} buttonStyle={'number'} />
            <NumberButtons text={'3'} buttonStyle={'number'} />
          </div>
          <ActionButtons text={'0'} buttonStyle={'action'} />
        </div>
        <div className='logicButtonsContainer'>
        <NumberButtons text={'÷'} buttonStyle={'red'} />
        <NumberButtons text={'×'} buttonStyle={'red'} />
        <NumberButtons text={'-'} buttonStyle={'red'} />
        <NumberButtons text={'+'} buttonStyle={'red'} />
        <NumberButtons text={'='} buttonStyle={'red'} />
        </div>
      </div>
    </div>
  );
};

export default App;
