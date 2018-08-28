import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className = 'main-container'>
      <CalculatorDisplay number = {0}/>
      <ActionButton id= 'clear' className= 'clear' text = 'clear'/>
      <ActionButton id='divide' className='divide' text = '&divide;'/>
      <NumberButton className='seven' number = {7}/>
      <NumberButton className='eight' number = {8}/>
      <NumberButton className='nine' number = {9}/>
      <ActionButton id='multiply' className='multiply' text = '&times;'/>
      <NumberButton className='four' number = {4}/>
      <NumberButton className='five' number = {5}/>
      <NumberButton className='six' number = {6}/>
      <ActionButton id='minus' className='minus' text = '-'/>
      <NumberButton className='one' number = {1}/>
      <NumberButton className='two' number = {2}/>
      <NumberButton className='three' number = {3}/>
      <ActionButton id= 'plus' className='plus' text = '+'/>
      <NumberButton className='zero' number = {0}/>
      <ActionButton id='equals' className='equals' text = '='/>
      
    </div>
  );
};

export default App;
