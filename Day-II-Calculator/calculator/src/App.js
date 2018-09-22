import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
const App = () => {
  return (
    <div>
      <div className='number-action-container'>
        <div className='row'>
          <NumberButton buttonStyle='button' text='7'/>
          <NumberButton buttonStyle='button' text='8'/>
          <NumberButton buttonStyle='button' text='9'/>
          <ActionButton text='X'/>
        </div>
        <div className='row'>
          <NumberButton buttonStyle='button' text='4'/>
          <NumberButton buttonStyle='button' text='5'/>
          <NumberButton buttonStyle='button' text='6'/>
          <ActionButton text='-'/>
        </div>
        <div className='row'>
          <NumberButton buttonStyle='button' text='1'/>
          <NumberButton buttonStyle='button' text='2'/>
          <NumberButton buttonStyle='button' text='3'/>
          <ActionButton text='+'/>
        </div>
      </div>
    </div>
  );
};

export default App;
