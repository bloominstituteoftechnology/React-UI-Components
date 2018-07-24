import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
const App = () => {
  return (
    <div>
   <NumberButton text='1' />
   <NumberButton text='2' />
   <NumberButton text='3' />
   <NumberButton text='4' />
   <NumberButton text='5' />
   <NumberButton text='6' />
   <NumberButton text='7' />
   <NumberButton text='8' />
   <NumberButton text='9' />
   <NumberButton text='÷' buttonStyle='operator'/>
   <NumberButton text='×' buttonStyle='operator'/>
   <NumberButton text='+' buttonStyle='operator'/>
   <NumberButton text='-' buttonStyle='operator'/>
   <NumberButton text='=' buttonStyle='operator'/>
   </div>
  );
};

export default App;
