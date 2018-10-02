import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <div className='numberButtonContainer'>
        <div className='numberButtonRow'>
          <NumberButton text='7' />
          <NumberButton text='8' />
          <NumberButton text='9' />
          <NumberButton text='X' />
        </div>
        
        <div className='numberButtonRow'>
          <NumberButton text='4' />
          <NumberButton text='5' />
          <NumberButton text='6' />
          <NumberButton text='-' />
        </div>
        
        <div className='numberButtonRow'>
          <NumberButton text='3' />
          <NumberButton text='2' />
          <NumberButton text='1' />
          <NumberButton text='+' />
        </div>
      </div>
    </div>
  );
};

export default App;
