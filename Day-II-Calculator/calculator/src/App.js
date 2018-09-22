import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import Display from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className ="calculator">
    <Display displayStyle ={'display'} text={'0'}/>
    <ActionButton actionStyle={'action'} text ={'clear'}/>
    <NumberButton buttonStyle ={'signs'} text ={'÷'}/>
    <NumberButton buttonStyle={'number'} text ={'7'}/>
    <NumberButton buttonStyle={'number'} text ={'8'}/>
    <NumberButton buttonStyle={'number'} text ={'9'}/>
    <NumberButton buttonStyle={'signs'} text={'x'}/>
    <NumberButton buttonStyle={'number'} text ={'4'}/>
    <NumberButton buttonStyle={'number'} text ={'5'}/>
    <NumberButton buttonStyle={'number'} text ={'6'}/>
    <NumberButton buttonStyle={'signs'} text ={'-'}/>
    <NumberButton buttonStyle={'number'} text ={'1'}/>
    <NumberButton buttonStyle={'number'} text ={'2'}/>
    <NumberButton buttonStyle={'number'} text ={'3'}/>
    <NumberButton buttonStyle= {'signs'} text ={'+'}/>
    <ActionButton actionStyle={'action'} text ={'0'}/>
    <NumberButton buttonStyle={'signs'} text={'='}/>
    
  </div>
    
  );
};

export default App;
