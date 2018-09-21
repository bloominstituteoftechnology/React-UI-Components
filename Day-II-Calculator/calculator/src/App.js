import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = (props) => {
  return (
    <div className='app'>

      
      <CalculatorDisplay displayStyle= 'diplay' text='0000'/>
      
      <div className='number-action-btnBox'>

      <div className='numberbtnBox'>
          <NumberButton displayStyle= 'numberbtn__clear' text='Clear'/>
          <div className='numberbtnBox--19'>
            <NumberButton displayStyle= 'numberbtn' text='9'/>
            <NumberButton displayStyle= 'numberbtn' text='8'/>
            <NumberButton displayStyle= 'numberbtn' text='7'/>
            <NumberButton displayStyle= 'numberbtn' text='6'/>
            <NumberButton displayStyle= 'numberbtn' text='5'/>
            <NumberButton displayStyle= 'numberbtn' text='4'/>
            <NumberButton displayStyle= 'numberbtn' text='3'/>
            <NumberButton displayStyle= 'numberbtn' text='2'/>
            <NumberButton displayStyle= 'numberbtn' text='1'/>
          </div>
      
          <NumberButton displayStyle= 'numberbtn__0' text='0'/>
      </div>
      
      <div className='actionbtnBox'>
        <ActionButton displayStyle= 'actionbtn' text='+'/>
        <ActionButton displayStyle= 'actionbtn' text='-'/>
        <ActionButton displayStyle= 'actionbtn' text='X'/>
        <ActionButton displayStyle= 'actionbtn' text='/'/>
        <ActionButton displayStyle= 'actionbtn' text='='/>
      </div>

      </div>
</div>
  );
};

export default App;
